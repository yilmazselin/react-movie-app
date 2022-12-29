import Banner from "./components/Banner/Banner";
import Layout from "./components/Layout/Layout";
import MovieList from "./components/Movie/MovieList";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Layout></Layout>
      <Banner />
      <MovieList />
    </>
  );
}

export default App;
