
import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { VscCheck} from "react-icons/vsc";
import "./Card.css";
import CardForm from "./CardForm";
import { FaEdit } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';

export default function ReservedCard({ card, deleteFlashcard, correct_or_wrongAnswer, editFlashcard }) {
  const [showBack, setShowBack] = useState(false);
  const [editing, setEditing] = useState(false);
  const [updatedCard, setUpdatedCard] = useState(card);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    deleteFlashcard(card.id);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };


  const handleEditClick = () => {
    setEditing(!editing);
  };



  return (
    <div className="card m-3 p-3">
      {!editing ? <>
        <p className="font-weight-bold text-center mb-3"><h3>{card.front}</h3></p>
        <div className="text-center">
          <button
            className="btn btn-outline-dark mb-3"
            onClick={() => setShowBack(!showBack)}
          >
            Show Back
          </button>
        </div>
        {showBack && (
          <div className="mb-4">
            <div className="font-weight-bold mb-3 text-center"><h3>Back</h3> <h4>{card.back}</h4></div>
            <div className="font-weight-bold text-center"><h3>Example</h3> <h4>{card.example}</h4></div>
          </div>
        )}
        <div className="d-flex justify-content-between align-items-center">


          <MdDeleteForever
            className="text-danger mr-3 cursor-pointer"
            onClick={() => handleDelete(card.id)}
            size="30"
          />
          <VscCheck
            className="text-success mr-3 cursor-pointer"
            onClick={() => correct_or_wrongAnswer(card, true)}
            size="30"
          />
          <FaEdit size={30} onClick={() => handleEditClick()} className="cursor-pointer" />
        </div>

      </>
        : (
          <div>
            <CardForm
              card={updatedCard}
              onSubmit={editFlashcard}
              onCancel={setEditing}
            />
          </div>
        )}

      {/* Modalfenster für Bestätigung der Flashcard-Löschung */}
      <Modal show={showConfirm} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this flashcard?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

