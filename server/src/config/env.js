import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV || "development",
  giphyApiUrl: process.env.GIPHY_API_URL,
  giphyApiKey: process.env.GIPHY_API_KEY,
};
