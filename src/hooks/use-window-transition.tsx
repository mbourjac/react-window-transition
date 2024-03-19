import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useWindowTransition = () => {
  const windowContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: windowContainerRef,
    offset: ['start start', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 12]);

  return {
    windowContainerRef,
    scale,
  };
};
