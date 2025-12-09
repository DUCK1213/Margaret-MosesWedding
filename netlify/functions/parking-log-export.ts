import type { Handler } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { sendWhatsAppMessage } from "../lib/whatsapp";

const STORE_NAME = "parking-log";
const LAST_EXPORT_KEY = "__last_export_epoch__";
const EXPORT_RECIPIENT_ENV = "PARKING_LOG_EXPORT_RECIPIENTS";
const FALLBACK_RECIPIENT_ENV = "PARKING_LOG_RECIPIENTS";

type ParkingLogEntry = {
  guestName: string;
  phoneNumber: string;
  plateNumber: string;
  venue: string;
  action: string;
  timestamp: string;
  extraMessage?: string;
};

const formatTimestamp = (iso: string) =>
  new Date(iso).toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

const getRecipients = (): string[] => {
  const getEnvList = (key: string) =>
    process.env[key]
      ?.split(",")
      .map((value) => value.trim())
      .filter(Boolean) ?? [];

  const explicitRecipients = getEnvList(EXPORT_RECIPIENT_ENV);
  if (explicitRecipients.length) {
    return explicitRecipients;
  }

  return getEnvList(FALLBACK_RECIPIENT_ENV);
};

export const config = {
  schedule: "*/15 * * * *",
};

const handler: Handler = async () => {
  const store = getStore({ name: STORE_NAME });
  const lastExportRaw = await store.get(LAST_EXPORT_KEY, { type: "text" });
  const lastExportEpoch = lastExportRaw ? Number(lastExportRaw) : 0;

  const { blobs } = await store.list();

  const hydratedEntries = await Promise.all(
    blobs
      .filter(({ key }) => key !== LAST_EXPORT_KEY)
      .map(async ({ key }) => {
        try {
          const raw = (await store.get(key, { type: "json" })) as ParkingLogEntry | null;
          if (!raw) {
            return null;
          }
          return { key, entry: raw };
        } catch (error) {
          console.error(`Failed to parse parking log blob ${key}`, error);
          return null;
        }
      }),
  );

  const entries =
    hydratedEntries
      .filter((item): item is { key: string; entry: ParkingLogEntry } => Boolean(item?.entry))
      .filter(({ entry }) => {
        const entryTime = new Date(entry.timestamp).getTime();
        if (Number.isNaN(entryTime)) {
          return false;
        }
        return entryTime > lastExportEpoch;
      })
      .sort((a, b) => new Date(a.entry.timestamp).getTime() - new Date(b.entry.timestamp).getTime()) ?? [];

  if (!entries.length) {
    return {
      statusCode: 200,
      body: JSON.stringify({ exported: 0, message: "No new parking log entries since last export" }),
    };
  }

  const recipients = getRecipients();
  if (!recipients.length) {
    return {
      statusCode: 200,
      body: JSON.stringify({ exported: 0, message: "No parking log export recipients configured" }),
    };
  }

  const firstTimestamp = formatTimestamp(entries[0].entry.timestamp);
  const lastTimestamp = formatTimestamp(entries[entries.length - 1].entry.timestamp);

  const lines = entries.map(({ entry }) => {
    const direction = entry.action === "in" ? "IN" : entry.action === "out" ? "OUT" : entry.action.toUpperCase();
    const guest = entry.guestName && entry.guestName !== "Unknown" ? `👤 ${entry.guestName}` : null;
    const phone = entry.phoneNumber ? `📞 ${entry.phoneNumber}` : null;
    const extra = entry.extraMessage ? `ℹ️ ${entry.extraMessage}` : null;

    return [
      `• ${direction} • ${entry.plateNumber}`,
      `📍 ${entry.venue}`,
      `🕒 ${formatTimestamp(entry.timestamp)}`,
      guest,
      phone,
      extra,
    ]
      .filter(Boolean)
      .join(" | ");
  });

  const summary = [`*Parking Log Export*`, `Entries: ${entries.length}`, `Window: ${firstTimestamp} – ${lastTimestamp}`, "", ...lines].join(
    "\n",
  );

  await Promise.all(recipients.map((recipient) => sendWhatsAppMessage(recipient, summary)));

  const latestEpoch = new Date(entries[entries.length - 1].entry.timestamp).getTime();
  await store.set(LAST_EXPORT_KEY, String(latestEpoch || Date.now()));

  return {
    statusCode: 200,
    body: JSON.stringify({ exported: entries.length, recipients }),
  };
};

export { handler };
