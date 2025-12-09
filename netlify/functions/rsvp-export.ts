import type { Handler } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

const RSVP_STORE = "rsvp-submissions";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const store = await getStore({ name: RSVP_STORE });
    const { keys } = await store.list();
    
    const submissions = [];
    
    // Get all submissions
    for (const key of keys) {
      try {
        const submission = await store.get(key);
        if (submission) {
          const data = JSON.parse(submission);
          submissions.push(data);
        }
      } catch (error) {
        console.error(`Error processing RSVP ${key}:`, error);
      }
    }

    // Sort by receivedAt date
    submissions.sort((a, b) => new Date(a.receivedAt).getTime() - new Date(b.receivedAt).getTime());

    // Create CSV content
    const headers = ["Name", "Email", "Phone", "Attending", "Guests", "Message", "Received At"];
    const csvRows = [
      headers.join(","),
      ...submissions.map(sub => [
        `"${sub.name || ""}"`,
        `"${sub.email || ""}"`,
        `"${sub.phone || ""}"`,
        `"${sub.attending || ""}"`,
        `"${sub.guests || ""}"`,
        `"${(sub.message || "").replace(/"/g, '""')}"`,
        `"${sub.receivedAt || ""}"`
      ].join(","))
    ];

    const csvContent = csvRows.join("\n");

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment filename="rsvp-submissions-${new Date().toISOString().split('T')[0]}.csv"`,
      },
      body: csvContent,
    };
  } catch (error) {
    console.error("RSVP export error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to export RSVP data" }),
    };
  }
};

export { handler };
