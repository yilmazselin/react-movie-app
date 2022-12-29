import React from "react";
import { Button, Col, Container } from "react-bootstrap";
import { GrPlayFill, GrCircleInformation } from "react-icons/gr";

function Banner() {
  const styles = {
    bannerImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
    },
    containerStyle: {
      position: "relative",
      zIndex: 5,
      minHeight: "calc(100vh - 76px)",
    },
    titleWrapper: {},
    filmLogo: {
      width: "75%",
    },
  };

  return (
    <div>
      <img
        src="http://occ-0-778-1490.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbIWgWKF1tZAuJSG4N8Rn8U1bN8_I082-Vy2yG76A3fDMA4-7PoTHC8hx4lMg1SxTP8SDXJXdLr7j94Ye_vVRzx_H_rUfWD3_-3Z.webp?r=f84"
        style={styles.bannerImage}
      />
      <Container
        style={styles.containerStyle}
        className="d-flex align-items-center"
      >
        <Col lg="6" className="text-white" style={styles.titleWrapper}>
          <img
            style={styles.filmLogo}
            className="mb-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/800px-Rick_and_Morty.svg.png"
          />
          <h5>6.Sezonu Şimdi İzleyin</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            consectetur blanditiis perspiciatis! Id asperiores beatae aut
            cumque. Repudiandae maiores culpa, aperiam nulla.
          </p>
          <Button variant="light" size="lg" className="px-4 me-2">
            <GrPlayFill />
            <span className="d-inline-block ms-2 fs-6">Oynat</span>
          </Button>
          <Button variant="secondary" size="lg">
            <GrCircleInformation className="icon-white" />
            <span className="d-inline-block ms-2 fs-6">Daha Fazla Bilgi</span>
          </Button>
        </Col>
      </Container>
    </div>
  );
}

export default Banner;
