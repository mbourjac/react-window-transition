import { HeroLink } from './HeroLink';

export const HeroFooter = () => {
  return (
    <footer className="flex h-14 items-center justify-between border-t border-black bg-white px-4">
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
