import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { GrPlayFill, GrAdd, GrLike, GrFormDown } from "react-icons/gr";
import CircleButton from "../Buttons/CircleButton";
import { colors } from "../../utils/colors";

function MovieCard({ data }) {
  const [active, setActive] = useState(false);

  const handleEnter = () => {
    // setTimeout(() => {
    setActive(true);
    // }, 1000);
  };
  const handleLeave = () => {
    setActive(false);
  };

  return (
    <Card
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`movie-card border-0 ${active === true ? "active" : ""}`}
    >
      <Card.Img className="movie-card-img" variant="top" src={data.image} />
      <Card.Body className="movie-card-body bg-dark text-white  ">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2">
            <CircleButton borderColor={"white"}>
              <GrPlayFill size={22} />
            </CircleButton>
            <CircleButton
              borderColor={colors.white}
              backgroundColor={colors.dark}
            >
              <GrAdd size={22} className="icon-white" />
            </CircleButton>
            <CircleButton
              borderColor={colors.white}
              backgroundColor={colors.dark}
            >
              <GrLike size={22} className="icon-white" />
            </CircleButton>
          </div>
          <CircleButton
            borderColor={colors.white}
            backgroundColor={colors.dark}
          >
            <GrFormDown size={22} className="icon-white" />
          </CircleButton>
        </div>
        <div className="fs-12 d-flex justify-content-between mb-2 mt-2">
          <div>
            <small className="body-title">13+</small>
          </div>
          <div>
            <small className="body-title"> {data.season} </small>
          </div>
          <div>
            <small className="body-title">HD</small>
          </div>
        </div>
        <div>
          <ul className="d-flex justify-content-between p-0 mb-0">
            {data.types.map((element, index) => (
              <li
                className="body-title"
                style={{ listStyle: index === 0 ? "none" : "circle" }}
                key={index}
              >
                {element}
              </li>
            ))}
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
