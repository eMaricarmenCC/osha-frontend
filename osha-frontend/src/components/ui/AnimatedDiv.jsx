import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedDiv = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,  // La animación se activará cada vez que el div sea visible
    threshold: 0.1,      // Se activa cuando el 10% del div es visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: inView ? '0%' : '100%', opacity: inView ? 1 : 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50vh 0', // Espaciado para permitir el desplazamiento
      }}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedDiv };