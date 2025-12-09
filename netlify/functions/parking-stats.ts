import type { Handler } from "@netlify/functions";
import { getStore } from "@netlify/blobs";

const PARKING_STORE = "parking-logs";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const store = await getStore({ name: PARKING_STORE });
    const { keys } = await store.list();
    
    let totalPasses = 0;
    let totalTags = 0;

    // Process each parking log entry
    for (const key of keys) {
      try {
        const log = await store.get(key);
        if (log) {
          const data = JSON.parse(log);
          if (data.type === "parking-pass") {
            totalPasses++;
          } else if (data.type === "volunteer-tag") {
            totalTags++;
          }
        }
      } catch (error) {
        console.error(`Error processing parking log ${key}:`, error);
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        totalPasses,
        totalTags
      }),
    };
  } catch (error) {
    console.error("Parking stats error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch parking stats" }),
    };
  }
};

export { handler };
