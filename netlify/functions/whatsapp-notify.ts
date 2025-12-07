import type { Handler } from "@netlify/functions";

const REQUIRED_ENV = ["WHATSAPP_API_URL", "WHATSAPP_API_KEY", "WHATSAPP_FROM_NUMBER"];

export const handler: Handler = async (event) => {
  try {
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: "Method not allowed" }),
      };
    }

    const missing = REQUIRED_ENV.filter((key) => !process.env[key]);
    if (missing.length) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `Missing environment variables: ${missing.join(", ")}` }),
      };
    }

    const payload = JSON.parse(event.body || "{}");
    const { to, message } = payload;

    if (!to || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing 'to' or 'message' in request body" }),
      };
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
      console.error("WhatsApp API error:", errorText);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: "Failed to send WhatsApp message" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unexpected error sending WhatsApp message" }),
    };
  }
};
