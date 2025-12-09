import type { Handler } from "@netlify/functions";
import { getStore } from "@netlify/blobs";
import { sendWhatsAppMessage } from "../lib/whatsapp";

const RSVP_STORE = "rsvp-submissions";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const payload = JSON.parse(event.body || "{}");
    const { name, email, phone, attending, guests, message } = payload;

    if (!name || !email || !phone || !attending) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const submission = {
      name,
      email,
      phone,
      attending,
      guests,
      message,
      receivedAt: new Date().toISOString(),
    };

    const store = await getStore({ name: RSVP_STORE });
    await store.set(`rsvp_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, JSON.stringify(submission));

    const recipients = process.env.RSVP_NOTIFICATION_RECIPIENTS?.split(",").map((num) => num.trim()).filter(Boolean) ?? [];
    if (recipients.length) {
      const whatsappMessage = `
*New RSVP Submission*
🧑 Name: ${name}
📞 Phone: ${phone}
📧 Email: ${email}
✅ Attending: ${attending === "yes" ? "Yes" : "No"}
👥 Guests: ${guests || "N/A"}
💬 Message: ${message || "None"}
      `.trim();

      await Promise.all(recipients.map((recipient) => sendWhatsAppMessage(recipient, whatsappMessage)));
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("RSVP submit error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to process RSVP" }),
    };
  }
};

export { handler };
