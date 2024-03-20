import { HeroLink } from './HeroLink';

export const HeroFooter = () => {
  return (
    <footer className="hidden h-14 items-center justify-between border-t border-black bg-[#FDFF00] px-4 md:flex xl:bg-white">
      <ul className="flex items-center gap-20">
        <li>
          <HeroLink to="tenetur">tenetur</HeroLink>
        </li>
        <li>
          <HeroLink to="iure">iure</HeroLink>
        </li>
        <li>
          <HeroLink to="nesciunt">nesciunt</HeroLink>
        </li>
        <li>
          <HeroLink to="numquam">numquam</HeroLink>
        </li>
      </ul>
      <HeroLink to="dolor">dolor</HeroLink>
    </footer>
  );
};
