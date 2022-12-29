import React from "react";
import MovieCard from "./MovieCard";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function MovieList() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={5}
        slidesPerGroup={6}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((x, i) => (
          <SwiperSlide key={i}>
            <MovieCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MovieList;
