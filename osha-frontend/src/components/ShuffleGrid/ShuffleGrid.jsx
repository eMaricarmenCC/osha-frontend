import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const generateSquares = ({squareData}) => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = ({squareData, nRow, nCol}) => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares(squareData));

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className={`grid grid-cols-${nCol} grid-rows-${nRow} h-[450px] gap-1`}>
      {squares.map((sq) => sq)}
    </div>
  );
};

export { ShuffleGrid };