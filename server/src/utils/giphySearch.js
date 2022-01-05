import axios from "axios";
import { env } from "../config";
import { UnexpectedError } from "./errorResponse";

export default async (query) => {
  try {
    const response = await axios.get(`${env.giphyApiUrl}/search`, {
      params: {
        api_key: env.giphyApiKey,
        q: query,
      },
    });

    return response;
  } catch (error) {
    throw new UnexpectedError(error.message);
  }
};
