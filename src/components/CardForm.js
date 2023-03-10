import React, { useState } from "react";

export default function CardForm({ card, onSubmit, onCancel }) {
  const [updatedCard, setUpdatedCard] = useState(card);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedCard({ ...updatedCard, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(updatedCard, card);
    onCancel(false)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mt-5">
        <label htmlFor="front">Front:</label>
        <input
          type="text"
          className="form-control"
          id="front"
          name="front"
          value={updatedCard.front}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="back">Back:</label>
        <input
          type="text"
          className="form-control"
          id="back"
          name="back"
          value={updatedCard.back}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group mt-3">
        <label htmlFor="example">Example:</label>
        <input
          type="text"
          className="form-control"
          id="example"
          name="example"
          value={updatedCard.example}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-outline-dark mr-3 mt-5">
        Save
      </button>
      <button type="button" className="btn btn-outline-dark mx-3 mt-5" onClick={()=>onCancel(false)}>
        Cancel
      </button>
    </form>
  );
}
