import axios from "axios";
import Gif from "../utils/interfaces/gif";

class GifService {
  static async get() {
    const { data } = await axios.get<Gif[]>(
      "https://639a0f50e916a46ec0a82d75.mockapi.io/gifs"
    );
    return data;
  }
  static post(url: string) {
    return axios.post("https://639a0f50e916a46ec0a82d75.mockapi.io/gifs", {
      url,
    });
  }
  static delete(gif: Gif) {
    return axios.delete(
      `https://639a0f50e916a46ec0a82d75.mockapi.io/gifs/${gif.id}`
    );
  }
}

export default GifService;
