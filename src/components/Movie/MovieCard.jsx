import React from "react";
import { Button, Card } from "react-bootstrap";
import { GrPlayFill, GrAdd, GrLike, GrFormDown } from "react-icons/gr";
import CircleButton from "../Buttons/CircleButton";
import { colors } from "../../utils/colors";

function MovieCard() {
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src="https://occ-0-3175-784.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW1IBiR27_qKafiKN5fd6SzQYPWhJWNPdE-646jpL7hDo4dRHvKuPlxyzp8R-kh7yG22HBtir8T-Jv3-RyC0TGeOhDyz5X8pWJSL29aCStXe5FJ1EwDB78lY-_oASdEHQmt_eZ7b2n6CPTkux-YkOrzcAyyDfabeWms4L3qu7DdpOS5asbgzu3oHI5bay_M.jpg?r=082"
      />
      <Card.Body className="movie-card-body bg-dark text-white">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-2 mb-2">
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
        <div className="d-flex justify-content-between mb-2 mt-2">
          <div>
            <small>%77 Eşleşme</small>
          </div>
          <div>
            <small>13+</small>
          </div>
          <div>
            <small>1 sa 25dk</small>
          </div>
          <div>
            <small>HD</small>
          </div>
        </div>
        <div>
          <ul className="d-flex justify-content-between p-0">
            <li style={{ listStyle: "none" }}>Dram</li>
            <li>Gerilim</li>
            <li>Tehlike</li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
