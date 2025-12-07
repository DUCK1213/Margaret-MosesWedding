const REQUIRED_ENV = ["WHATSAPP_API_URL", "WHATSAPP_API_KEY", "WHATSAPP_FROM_NUMBER"] as const;

type RequiredEnvKey = (typeof REQUIRED_ENV)[number];

export const validateWhatsAppEnv = (): { ok: boolean; missing: RequiredEnvKey[] } => {
  const missing = REQUIRED_ENV.filter((key) => !process.env[key]) as RequiredEnvKey[];
  return { ok: missing.length === 0, missing };
};

export const sendWhatsAppMessage = async (to: string, message: string) => {
  const envState = validateWhatsAppEnv();
  if (!envState.ok) {
    throw new Error(`Missing WhatsApp environment variables: ${envState.missing.join(", ")}`);
  }

  const apiUrl = process.env.WHATSAPP_API_URL!;
  const apiKey = process.env.WHATSAPP_API_KEY!;
  const from = process.env.WHATSAPP_FROM_NUMBER!;

  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to,
      message,
    }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`WhatsApp API error: ${errorText}`);
  }
};
