export const HeroContent = () => {
  return (
    <div className="flex grow flex-col">
      <div className="flex grow">
        <div className="flex flex-col justify-between border-r border-black bg-white p-4">
          <div className="flex flex-col gap-4">
            <p className="indent-12 text-4xl">
              Minus totam, illo natus dolore eum quam quasi inventore libero
              consectetur dolorem aspernatur, deleniti nobis recusandae
              dignissimos minima consequuntur. Recusandae!
            </p>
            <p className="w-1/2 indent-12 text-2xl tracking-wider">
              Laboriosam alias nulla delectus atque at exercitationem eligendi
              est nobis, debitis ipsam in, error optio.
            </p>
          </div>
          <p className="text-end text-2xl tracking-wider">
            — alias voluptatibus
          </p>
        </div>
        <div className="min-w-[24rem] border-[1rem] border-white">
          <div className="h-full border border-black"></div>
        </div>
      </div>
      <div className="flex h-20 border-t border-black bg-white">
        <div className="grow border-r border-black"></div>
        <div className="min-w-[24rem]"></div>
      </div>
    </div>
  );
};
