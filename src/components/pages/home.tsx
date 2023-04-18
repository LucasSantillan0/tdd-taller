import AddGif from "../molecules/add-gif/add-gif";
import Card from "../molecules/card/Card";
import useHome from "./use-home/use-home";
import "./home.scss";
import EmptyListWarning from "../atmos/empty-list-warning/EmptyListWarning";

const Home = () => {
  const { gifs, deleteGif, submitGif } = useHome();
  return (
    <main className="home">
      <header>
        <h1>Gif Galery</h1>
        <AddGif onSubmit={submitGif} />
      </header>
      <section className="home__gif-list">
        {gifs.map((gif, index) => (
          <Card handleDelete={deleteGif} gif={gif} key={index} />
        ))}
        {!gifs.length && <EmptyListWarning />}
      </section>
    </main>
  );
};

export default Home;
