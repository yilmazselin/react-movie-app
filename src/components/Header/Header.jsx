import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  GrSearch,
  GrNotification,
  GrPersonalComputer,
  GrFormDown,
} from "react-icons/gr";

function Header() {
  const styles = {
    headerStyles: {
      position: "relative",
      zIndex: 5,
      background: "rgb(0, 0, 0)",
      background:
        "linear-gradient(180deg, rgba(0,0,0,0.2847732843137255) 56%, rgba(0,0,0,0.15312062324929976) 100%)",
    },
  };

  return (
    <>
      <Navbar style={styles.headerStyles} bg="transparent">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={require("../../images/logo.png")}
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">
              Anasayfa
            </Nav.Link>
            <Nav.Link className="text-white" href="#features">
              Filmler
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">
              Diziler
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">
              Yeni ve Popüler
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">
              Listem
            </Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link href="#pricing">
              <GrSearch color="#fff" />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <GrNotification />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <GrPersonalComputer />
              <GrFormDown />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
