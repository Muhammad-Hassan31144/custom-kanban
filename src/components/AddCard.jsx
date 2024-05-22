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
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border bg-gray-200 p-2 text-black"
          />
          <div className="mt-1 flex items-center justify-end gap-2">
            <button onClick={() => setAdding(false)} className="px-3 py-1 bg-red-500 text-white rounded">Close</button>
            <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded">Add</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setAdding(true)} className="w-full px-3 py-2 bg-blue-500 text-white rounded">
          + Add Card
        </button>
      )}
    </>
  );
};

export default AddCard;
