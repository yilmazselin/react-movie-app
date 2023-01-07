import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/movies")
      .then((res) => res.json())
      .then((response) => setMovies(response));
  }, []);

  const styles = {
    sectionStyle: {
      marginTop: "-50px",
      position: "relative",
      zIndex: 5,
    },
  };

  return (
    <>
      <section style={styles.sectionStyle}>
        <Container className="mb-3" fluid>
          <h5 className="text-white ">Netlix'te Popüler</h5>
          <Carousel controls={true} interval={599999}>
            {movies.map((page, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex gap-1 carousel-page-wrapper">
                  {page.map((movie, i) => (
                    <MovieCard key={movie.id} data={movie} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <Container className="mb-3" fluid>
          <h5 className="text-white">Netlix'te Popüler</h5>
          <Carousel interval={599999}>
            {movies.map((page, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex gap-1 carousel-page-wrapper">
                  {page.map((movie, i) => (
                    <MovieCard key={movie.id} data={movie} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <Container className="mb-3" fluid>
          <h5 className="text-white">Netlix'te Popüler</h5>
          <Carousel interval={599999}>
            {movies.map((page, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex gap-1 carousel-page-wrapper">
                  {page.map((movie, i) => (
                    <MovieCard key={movie.id} data={movie} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
        <Container className="mb-3" fluid>
          <h5 className="text-white">Netlix'te Popüler</h5>
          <Carousel interval={599999}>
            {movies.map((page, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex gap-1 carousel-page-wrapper">
                  {page.map((movie, i) => (
                    <MovieCard key={movie.id} data={movie} />
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>
    </>
  );
}

export default MovieList;
