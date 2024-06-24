import React, { useState } from 'react';
import Card from './Card';
import AddCard from './AddCard';
import DropIndicator from './DropIndicator';
import { AiTwotoneDelete } from "react-icons/ai";

const Column = ({ title, headingColor, cards, column, setCards, deleteColumn }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData('cardId', card.id);
  };

  const handleDrop = (e) => {
    const cardId = e.dataTransfer.getData('cardId');
    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, column } : card
    );
    setCards(newCards);
    setActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDelete = () => {
    deleteColumn(title);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="flex flex-col w-60 min-w-[240px] p-4 bg-base-100 rounded-lg shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor || 'text-base-content'}`}>{title}</h3>
        <button onClick={handleDelete} className="text-red-500 h-4 w-4">
          <AiTwotoneDelete />
        </button>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`flex flex-col gap-2 transition-colors ${active ? 'bg-green-100' : 'bg-transparent'}`}
      >
        {filteredCards.map((c) => (
          <Card key={c.id} {...c} handleDragStart={handleDragStart} />
        ))}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </div>
    </div>
  );
};

export default Column;
