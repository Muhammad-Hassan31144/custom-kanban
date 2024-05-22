import React, { useState, useEffect } from 'react';
import Column from './Column';
import BurnBarrel from './BurnBarrel';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const Board = () => {
  const [cards, setCards] = useState(getLocalStorage('cards', []));
  const [columns, setColumns] = useState(getLocalStorage('columns', ['Backlog']));

  useEffect(() => {
    setLocalStorage('cards', cards);
  }, [cards]);

  useEffect(() => {
    setLocalStorage('columns', columns);
  }, [columns]);

  const addColumn = (title) => {
    setColumns([...columns, title]);
  };

  const deleteColumn = (columnTitle) => {
    setColumns(columns.filter((col) => col !== columnTitle));
    setCards(cards.filter((card) => card.column !== columnTitle.toLowerCase().replace(/ /g, '-')));
  };

  return (
    <div className="flex flex-col h-full w-full p-4 bg-gray-900 text-white">
      <div className="flex gap-3 overflow-x-auto pb-4">
        {columns.map((column, index) => (
          <Column key={index} title={column} column={column.toLowerCase().replace(/ /g, '-')} cards={cards} setCards={setCards} deleteColumn={deleteColumn} />
        ))}
        <BurnBarrel setCards={setCards} />
      </div>
      <div className="mt-6">
        <AddColumnButton addColumn={addColumn} />
      </div>
    </div>
  );
};

const AddColumnButton = ({ addColumn }) => {
  const [title, setTitle] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addColumn(title.trim());
      setTitle('');
      setShowInput(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {showInput ? (
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New column title"
            className="w-full rounded border bg-gray-200 p-2 text-black"
          />
          <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Add</button>
          <button onClick={() => setShowInput(false)} className="px-4 py-2 bg-red-500 text-white rounded">Cancel</button>
        </form>
      ) : (
        <button onClick={() => setShowInput(true)} className="px-6 py-3 bg-blue-500 text-white rounded">
          + Add Column
        </button>
      )}
    </div>
  );
};

export default Board;
