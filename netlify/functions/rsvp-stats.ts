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
    
    let total = 0;
    let attending = 0;
    let notAttending = 0;
    let totalGuests = 0;

    // Process each RSVP submission
    for (const key of keys) {
      try {
        const submission = await store.get(key);
        if (submission) {
          const data = JSON.parse(submission);
          total++;
          
          if (data.attending === "yes") {
            attending++;
            if (data.guests) {
              totalGuests += parseInt(data.guests) || 0;
            }
          } else if (data.attending === "no") {
            notAttending++;
          }
        }
      } catch (error) {
        console.error(`Error processing RSVP ${key}:`, error);
      }
    }

    // Add the attending guests to total guests count
    totalGuests += attending;

    return {
      statusCode: 200,
      body: JSON.stringify({
        total,
        attending,
        notAttending,
        totalGuests
      }),
    };
  } catch (error) {
    console.error("RSVP stats error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch RSVP stats" }),
    };
  }
};

export { handler };
