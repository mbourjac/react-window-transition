import cover from '../../../assets/images/cover.jpg';
import { useMediaQuery } from '../../../hooks/use-media-query';

export const HeroContent = () => {
  const isSmallDevice = useMediaQuery('(max-width: 1280px)');

  return (
    <div className="flex grow flex-col">
      <div className="flex grow">
        <div className="flex flex-col justify-between border-r border-black bg-white p-4">
          <div className="flex flex-col gap-4">
            <p className="indent-12 text-2xl sm:text-4xl">
              Minus totam, illo natus dolore eum quam quasi inventore libero
              consectetur dolorem aspernatur, deleniti nobis recusandae
              dignissimos minima consequuntur. Recusandae!
            </p>
            <p className="indent-12 text-xl tracking-wider sm:w-1/2 sm:text-2xl">
              Laboriosam alias nulla delectus atque at exercitationem eligendi
              est nobis, debitis ipsam in, error optio.
            </p>
          </div>
          <p className="text-end text-xl tracking-wider sm:text-2xl">
            — alias voluptatibus
          </p>
        </div>
        <div className="min-w-[8rem] border-[1rem] border-white min-[900px]:min-w-[24rem]">
          {isSmallDevice ?
            <img src={cover} alt="" className="h-full object-cover" />
          : <div className="h-full border border-black"></div>}
        </div>
      </div>
      <div className="flex h-20 border-t border-black bg-white">
        <div className="grow border-r border-black"></div>
        <div className="min-w-[8rem] min-[900px]:min-w-[24rem]"></div>
      </div>
    </div>
  );
};
