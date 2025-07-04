import React, { useState,Fragment  } from "react";
import Button from "react-bootstrap/Button";
import LevelList from "./LevelList";

export default function BoxList({
  flashcards,
  deleteFlashcard,
  correct_or_wrongAnswer,
  changeFlashcardsLevels,
  editFlashcard
}) {
  const [showBoxes, setShowBoxes] = useState(Array(4).fill(false));

  const toggleBox = (index) => {
    setShowBoxes((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const hasFlashcard = (box) => {
    return flashcards.some(flashcard => flashcard.box === box);
  }

  return (
    <>
      {Array.from({ length: 4 }, (_, i) => (
        <Fragment key={i}>
          <Button variant={hasFlashcard(i + 1) ? "info" : "danger"} size="lg" onClick={() => toggleBox(i)}>
            Box {i + 1}
          </Button>
          {showBoxes[i] && (
            <LevelList
              numberOfLevelBox={Math.pow(2, i + 1)}
              flashcards={flashcards.filter(
                (flashcard) => flashcard.box === i + 1
              )}
              deleteFlashcard={deleteFlashcard}
              correct_or_wrongAnswer={correct_or_wrongAnswer}
              changeFlashcardsLevels={changeFlashcardsLevels}
              editFlashcard={editFlashcard}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}
