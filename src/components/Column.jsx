import React, { useState } from 'react';
import Card from './Card';
import AddCard from './AddCard';
import DropIndicator from './DropIndicator';

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
    <div className="w-60 min-w-[240px] p-2 bg-gray-800 rounded-lg shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor || 'text-white'}`}>{title}</h3>
        <button onClick={handleDelete} className="text-red-500">X</button>
      </div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${active ? 'bg-gray-700/50' : 'bg-gray-700/0'}`}
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
