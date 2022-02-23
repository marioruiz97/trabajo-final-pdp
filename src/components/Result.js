import React from "react";
import { Button, Modal } from "react-bootstrap";
import { formatearSaldo } from "../utils/utils";

const Result = ({ puntos, showModal, closeModal }) => {
  const handleClose = () => {
    closeModal();
  };

  return (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Fin del juego</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <h5 className="text-center">
          Tu puntaje alcanzado fue: ${formatearSaldo(puntos)}
        </h5>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Result;
