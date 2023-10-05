'use client';

import Carousel from 'nuka-carousel';
export default function News() {
  const elements = [
    {
      title: 'Autumn Drinks',
      text: 'Новые имбирный какао, чай карамельное яблоко и раф карамель-лемонграсс всего 330 рублей!',
      image: {
        src: 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg',
        alt: 'Новые имбирный какао, чай карамельное яблоко и раф карамель-лемонграсс всего 330 рублей!',
      },
    },
  ];

  const defaultControlsConfig = {
    nextButtonText: '>',
    prevButtonText: '<',
    nextButtonStyle: {
      color: '#FFFFFF',
      borderRadius: 10,
      padding: 5,
      aspectRatio: 1,
      backgroundColor: '#5E2605',
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
    prevButtonStyle: {
      color: '#FFFFFF',
      borderRadius: 10,
      padding: 5,
      aspectRatio: 1,
      backgroundColor: '#5E2605',
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    },
  };

  return (
    <div
      className="card border-black border-opacity-30 w-[70%] h-[40%] self-center"
      id="news">
      <Carousel wrapAround defaultControlsConfig={defaultControlsConfig}>
        {elements.map((element, index) => {
          return (
            <div
              key={index}
              className="flex flex-row self-center items-center justify-center gap-x-[40px] h-full w-full">
              <div
                className="w-[30%] overflow-hidden relative item-center justify-center flex flex-col gap-y-[5px]"
                key={index}>
                <span className="typeface font-bold text-accent">
                  {element.title}
                </span>
                <p className="hyphens-auto">{element.text}</p>
              </div>
              <img
                className="rounded-[10px] h-fit"
                src={element.image.src}
                alt={element.image.alt}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
