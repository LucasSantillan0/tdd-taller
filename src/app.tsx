import { useEffect, useState } from "react";
import "./app.scss";
import AddGif from "./components/molecules/add-gif/add-gif";
import Gif from "./utils/interfaces/gif";
import Card from "./components/molecules/card/Card";
import GifService from "./services/gif-service";

const App = () => {
  const submitGif = async (url: string) => {};
  const deleteGif = async (gif: Gif) => {};
  const [gifs, setGifs] = useState<Gif[]>([]);
  useEffect(() => {
  }, []);
  return (
    <main className="app">
      <header>
        <h1>Gif Galery</h1>
        <AddGif onSubmit={submitGif} />
      </header>
      <section className="app__gif-list">
        {gifs.map((gif) => (
          <Card handleDelete={deleteGif} gif={gif} key={gif.id} />
        ))}
      </section>
    </main>
  );
};

export default App;
