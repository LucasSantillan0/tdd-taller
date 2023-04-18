import { useState, useEffect } from "react";
import Gif from "../../../utils/interfaces/gif";
import GifService from "../../../services/gif-service";

const useHome = () => {
  const fetch = () => GifService.get().then((gifs) => setGifs(gifs));

  useEffect(() => {
    fetch();
  }, []);

  const submitGif = async (url: string) => {
    const previousState = [...gifs];
    try {
      await GifService.post(url);
      await fetch();
    } catch {
      setGifs(previousState);
    }
  };

  const deleteGif = async (gifToDelete: Gif) => {
    const previousState = [...gifs];
    try {
      setGifs(gifs.filter((gif) => gif.id !== gifToDelete.id));
      await GifService.delete(gifToDelete);
    } catch {
      setGifs(previousState);
    }
  };

  const [gifs, setGifs] = useState<Gif[]>([]);

  return { submitGif, deleteGif, gifs };
};
export default useHome;
