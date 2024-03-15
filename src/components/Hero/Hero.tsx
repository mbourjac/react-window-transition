import { HeroContent } from './HeroContent';
import { HeroFooter } from './HeroFooter';
import { HeroHeader } from './HeroHeader';
import { HeroWindow } from './HeroWindow';

export const Hero = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroHeader />
      <div className="flex grow flex-col">
        <HeroContent />
        <HeroWindow />
      </div>
      <HeroFooter />
    </div>
  );
};
