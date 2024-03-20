import { motion } from 'framer-motion';
import { useMediaQuery } from '../../../hooks/use-media-query';
import { useWindowTransition } from '../../../hooks/use-window-transition';
import { HeroLayout } from './HeroLayout';

export const Hero = () => {
  const isSmallDevice = useMediaQuery('(max-width: 1280px)');
  const { windowContainerRef, scale } = useWindowTransition();

  return (
    <div
      className="relative z-10 overflow-clip xl:h-[200vh]"
      ref={windowContainerRef}
    >
      {isSmallDevice ?
        <div className="flex h-screen flex-col">
          <HeroLayout />
        </div>
      : <motion.div
          style={{ scale }}
          className="flex h-screen origin-[calc(100%-12rem)_21.35%] flex-col"
        >
          <HeroLayout />
        </motion.div>
      }
    </div>
  );
};
