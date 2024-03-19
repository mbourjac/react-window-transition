import { motion } from 'framer-motion';
import { useWindowTransition } from '../../../hooks/use-window-transition';
import { HeroContent } from './HeroContent';
import { HeroFooter } from './HeroFooter';
import { HeroHeader } from './HeroHeader';

export const Hero = () => {
  const { windowContainerRef, scale } = useWindowTransition();

  return (
    <div
      className="relative z-10 h-[200vh] overflow-clip"
      ref={windowContainerRef}
    >
      <motion.div
        style={{ scale }}
        className="flex h-screen origin-[calc(100%-12rem)_21.35%] flex-col"
      >
        <HeroHeader />
        <HeroContent />
        <HeroFooter />
      </motion.div>
    </div>
  );
};
