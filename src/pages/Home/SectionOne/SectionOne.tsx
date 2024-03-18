import cover from '../../../assets/images/section-one-cover.jpg';
import { SECTION_ITEMS } from './SectionOne.constants';
import { SectioneOneItem } from './SectioneOneItem';

export const SectionOne = () => {
  return (
    <div className="h-screen p-4">
      <div className="flex gap-4">
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-y-8 bg-[#FDFF00] px-12 xl:gap-4">
          <p className="border-b border-black text-6xl">sit amet</p>
          <div className="col-start-1 row-start-2 flex flex-col gap-4 xl:col-start-2">
            {SECTION_ITEMS.map(({ heading, content }, index) => (
              <SectioneOneItem
                key={index}
                heading={heading}
                isFirst={index === 0}
              >
                {content}
              </SectioneOneItem>
            ))}
          </div>
        </div>
        <img src={cover} alt="" className="max-h-[calc(100vh-2rem)]" />
      </div>
    </div>
  );
};
