import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { formatearSaldo } from "../utils/utils";
import "./estilos/Header.css";

const Header = ({ nombreJugador, dificultad, puntos }) => {
  return (
    <Navbar bg="dark py-3" variant="dark">
      <div className="mx-3"></div>
      <Navbar.Brand href="#">
        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Trivia
      </Navbar.Brand>
      <Container>
        <Navbar.Collapse>
          <Navbar.Text>Nombre : {nombreJugador}</Navbar.Text>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-center">
          <Navbar.Text>Dificultad : {dificultad}</Navbar.Text>
        </Navbar.Collapse>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Ganancia : ${formatearSaldo(puntos)}</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
