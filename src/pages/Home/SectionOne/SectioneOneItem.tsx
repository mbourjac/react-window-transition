import type { ReactNode } from 'react';

type SectioneOneItemProps = {
  heading: string;
  isFirst: boolean;
  children: ReactNode;
};

export const SectioneOneItem = ({
  heading,
  isFirst,
  children,
}: SectioneOneItemProps) => {
  return (
    <>
      {!isFirst && <div className="text-center text-2xl">●</div>}
      <div className="text-xl">
        <h3>{heading}</h3>
        <p>{children}</p>
      </div>
    </>
  );
};
