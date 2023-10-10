'use client';

import Carousel from 'nuka-carousel';
import positions from '@/src/components/News/NewsPositions';
import tailwindConfigResolved from '@/src/functions/tailwindConfigResolved';
export default function News() {
  const buttonStyle = {
    color: '#FFFFFF',
    borderRadius: 10,
    padding: 5,
    'margin-inline': 10,
    aspectRatio: 1,
    backgroundColor: '#5E2605',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  };

  const defaultControlsConfig = {
    nextButtonText: '>',
    prevButtonText: '<',
    nextButtonStyle: buttonStyle,
    prevButtonStyle: buttonStyle,
  };

  return (
    <div
      className="card p-0 border-accent w-full sm:w-[80%] h-[80%] sm:h-[50vh] self-center"
      id="news">
      <Carousel wrapAround defaultControlsConfig={defaultControlsConfig}>
        {positions.map((position, index) => {
          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row self-center items-center justify-center p-[10px] sm:gap-x-[40px] h-full w-full">
              <div
                className="w-full sm:w-[30%] overflow-hidden relative item-center justify-center flex flex-col gap-y-[5px]"
                key={index}>
                <div className="flex flex-row gap-x-[5px]">
                  {position.icon ? (
                    <position.icon className={`h-full stroke-1 w-full`} />
                  ) : (
                    ''
                  )}
                  <span className="typeface font-bold text-accent">
                    {position.title}
                  </span>
                </div>
                <p className="hyphens-auto truncate whitespace-pre-line">
                  {position.content}
                </p>
              </div>
              <img
                className="rounded-[10px] h-fit"
                src={position.image.src}
                alt={position.image.alt}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
