import React, { useState } from 'react';

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim().length) return;
    const newCard = {
      column,
      title: text.trim(),
      id: Date.now().toString(),
    };
    setCards((prev) => [...prev, newCard]);
    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="textarea textarea-bordered w-full"
          />
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={() => setAdding(false)}
              className="btn btn-sm btn-error"
            >
              Close
            </button>
            <button type="submit" className="btn btn-sm btn-success">
              Add
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="btn btn-primary w-full"
        >
          + Add Card
        </button>
      )}
    </>
  );
};

export default AddCard;
