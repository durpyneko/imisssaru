// utils/twitch.js

import axios from "axios";

const TWITCH_CLIENT_ID = process.env.TWITCH_CLIENT_ID;

export async function isSaruLive(username) {
  try {
    const response = await axios.get(
      `https://api.twitch.tv/helix/streams?user_login=${username}`,
      {
        headers: {
          "Client-ID": TWITCH_CLIENT_ID,
        },
      }
    );

    const { data } = response;

    // If the user is live, data.data will contain stream information
    return data.data.length > 0;
  } catch (error) {
    console.error("Error fetching Twitch data:", error);
    return false;
  }
}
