import { HeroContent } from './HeroContent';
import { HeroFooter } from './HeroFooter';
import { HeroHeader } from './HeroHeader';

export const HeroLayout = () => {
  return (
    <>
      <HeroHeader />
      <HeroContent />
      <HeroFooter />
    </>
  );
};
