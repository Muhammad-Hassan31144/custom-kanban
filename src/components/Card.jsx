import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <motion.div
      layout
      layoutId={id}
      draggable="true"
      onDragStart={(e) => handleDragStart(e, { title, id, column })}
      className="cursor-grab rounded border border-gray-700 bg-gray-800 p-3"
    >
      <p className="text-sm text-white">{title}</p>
    </motion.div>
  );
};

export default Card;
