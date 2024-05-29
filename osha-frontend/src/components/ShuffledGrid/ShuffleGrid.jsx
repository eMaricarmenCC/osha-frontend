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

const generateSquares = (images) => {
  return shuffle(images).map((img, index) => (
    <motion.div
      key={img.id || index}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover", //container
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = ({ images, nColClass, gapClass}) => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares(images));

  useEffect(() => {
    shuffleSquares();
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares(images));
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 md:${nColClass} grid-rows-auto h-[450px] ${gapClass}`}>
      {squares.map((sq) => sq)}
    </div>
  );
};

export { ShuffleGrid };