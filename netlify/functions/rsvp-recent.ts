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
    
    // Get all submissions and sort by date
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

    // Sort by receivedAt date (newest first) and take last 10
    const recentSubmissions = submissions
      .sort((a, b) => new Date(b.receivedAt).getTime() - new Date(a.receivedAt).getTime())
      .slice(0, 10);

    return {
      statusCode: 200,
      body: JSON.stringify(recentSubmissions),
    };
  } catch (error) {
    console.error("Recent RSVPs error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch recent RSVPs" }),
    };
  }
};

export { handler };
