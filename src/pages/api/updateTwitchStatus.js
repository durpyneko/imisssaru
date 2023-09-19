const axios = require("axios");

const channelName = "saruei";

async function fetchTwitchStatus(channelName) {
  try {
    const response = await axios.get(`https://www.twitch.tv/${channelName}`);
    const { data } = response;

    if (data.includes("isLiveBroadcast")) {
      return "Saru is Live! GO GO GO!!";
    } else {
      return "Saru is Offline... sob";
    }
  } catch (error) {
    console.error(`Error fetching Twitch status for ${channelName}:`, error);
    return "Error";
  }
}

module.exports = async (req, res) => {
  const twitchStatus = await fetchTwitchStatus(channelName);
  console.log(twitchStatus);

  res.status(200).send(twitchStatus);
};
