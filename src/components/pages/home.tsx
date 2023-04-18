import AddGif from "../molecules/add-gif/add-gif";
import Card from "../molecules/card/Card";
import useHome from "./use-home/use-home";
import "./home.scss";

const Home = () => {
  const { gifs, deleteGif, submitGif } = useHome();
  return (
    <main className="home">
      <header>
        <h1>Gif Galery</h1>
        <AddGif onSubmit={submitGif} />
      </header>
      <section className="home__gif-list">
        {gifs.map((gif) => (
          <Card handleDelete={deleteGif} gif={gif} key={gif.id} />
        ))}
      </section>
    </main>
  );
};

export default Home;
