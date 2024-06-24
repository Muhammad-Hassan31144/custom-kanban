import React, { useState, useEffect } from 'react';
import Column from './Column';
import BurnBarrel from './BurnBarrel';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import ThemeSwitcher from './ThemeSwitcher';

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
    <div className="flex flex-col min-h-screen p-4 bg-base-200 text-base-content">
      <header className="flex items-center justify-between p-4 bg-base-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Kanban Board</h1>
        <div className="flex items-center gap-3">
          <AddColumnButton addColumn={addColumn} />
          <ThemeSwitcher />
        </div>
      </header>
      <main className="flex flex-1 gap-3 overflow-x-auto pb-4 mt-4">
        {columns.map((column, index) => (
          <Column key={index} title={column} column={column.toLowerCase().replace(/ /g, '-')} cards={cards} setCards={setCards} deleteColumn={deleteColumn} />
        ))}
        <BurnBarrel setCards={setCards} />
      </main>
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
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-success">Add</button>
          <button type="button" onClick={() => setShowInput(false)} className="btn btn-error">Cancel</button>
        </form>
      ) : (
        <button onClick={() => setShowInput(true)} className="btn btn-primary">+ Add Column</button>
      )}
    </div>
  );
};

export default Board;
