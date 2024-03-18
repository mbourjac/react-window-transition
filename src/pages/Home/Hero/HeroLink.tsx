import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../../lib/tailwind';

type HeroLinkProps = {
  to: string;
  className?: string;
  children: ReactNode;
};

export const HeroLink = ({ to, className, children }: HeroLinkProps) => {
  return (
    <Link to={to} className={cn('text-xl tracking-wider underline', className)}>
      {children}
    </Link>
  );
};
