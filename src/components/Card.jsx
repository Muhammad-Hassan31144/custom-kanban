import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <motion.div
      layout
      layoutId={id}
      draggable="true"
      onDragStart={(e) => handleDragStart(e, { title, id, column })}
      className="cursor-grab rounded-lg border border-gray-300 bg-base-100 shadow-md p-3 mb-3"
    >
      <p className="text-sm text-base-content">{title}</p>
    </motion.div>
  );
};

export default Card;
