import type { Handler } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { sendWhatsAppMessage } from "../lib/whatsapp";

const STORE_NAME = "parking-log";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const { guestName, phoneNumber, plateNumber, venue, action, timestamp, extraMessage } = payload;

    if (!plateNumber || !venue || !action) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const entry = {
      guestName: guestName || "Unknown",
      phoneNumber: phoneNumber || "",
      plateNumber: plateNumber.toUpperCase(),
      venue,
      action,
      timestamp: timestamp || new Date().toISOString(),
      extraMessage: extraMessage || "",
    };

    const store = await getStore({ name: STORE_NAME });
    await store.set(`parking_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, JSON.stringify(entry));

    const recipients =
      process.env.PARKING_LOG_RECIPIENTS?.split(",")
        .map((num) => num.trim())
        .filter(Boolean) ?? [];

    if (recipients.length && action !== "register") {
      const message = `
*Parking ${action === "in" ? "Check-In" : "Check-Out"}*
🚗 Plate: ${entry.plateNumber}
👤 Guest: ${entry.guestName}
📞 Phone: ${entry.phoneNumber || "N/A"}
📍 Venue: ${entry.venue}
🕒 Time: ${new Date(entry.timestamp).toLocaleString("en-GB")}
${entry.extraMessage ? `ℹ️ ${entry.extraMessage}` : ""}
      `.trim();

      await Promise.all(recipients.map((recipient) => sendWhatsAppMessage(recipient, message)));
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Parking log error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to store parking log" }),
    };
  }
};

export { handler };
