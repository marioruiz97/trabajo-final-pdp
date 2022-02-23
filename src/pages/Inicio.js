import React from "react";
import { Card, Container } from "react-bootstrap";
import Formulario from "../components/Formulario";
import { useState } from "react";

const Inicio = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [name, setName] = useState("");
  return (
    <>
      <Container className="mt-5 pt-4 col-lg-5">
        <Card className="shadow-lg  mb-5 ">
          <Card.Header className="text-center ">
            <h2 className="display-4 ">Juego de Preguntas</h2>
          </Card.Header>
          <Card.Body className="mt-2 p-3">
            <Formulario
              category={category}
              setCategory={setCategory}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
              name={name}
              setName={setName}
            />
            <br />
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Inicio;
