import cover from '../../../assets/images/cover.jpg';
import { useMediaQuery } from '../../../hooks/use-media-query';
import { SECTION_ITEMS } from './SectionOne.constants';
import { SectioneOneItem } from './SectioneOneItem';

export const SectionOne = () => {
  const isSmallDevice = useMediaQuery('(max-width: 1280px)');

  return (
    <div className="xl:mt-[-200vh] xl:h-[200vh] xl:p-4">
      <div className="top-4 flex gap-4 xl:sticky ">
        <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] gap-y-8 bg-[#FDFF00] px-4 py-16 xl:gap-4 xl:px-12 xl:pt-0">
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
        {!isSmallDevice && (
          <img src={cover} alt="" className="max-h-[calc(100vh-2rem)]" />
        )}
      </div>
    </div>
  );
};
