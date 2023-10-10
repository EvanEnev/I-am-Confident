'use client';
import positions, {MenuPosition} from '@/src/components/Menu/MenuPositions';
import {useState} from 'react';
import tailwindConfigResolved from '@/src/functions/tailwindConfigResolved';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<
    MenuPosition | undefined
  >(positions.find((obj: MenuPosition) => obj.category === 'кофе'));
  const [hovered, setHovered] = useState<string | null>('кофе');

  const renderElements = (elements: string[] | undefined) => {
    return elements?.map((element, index) => {
      return (
        <span className="typeface w-full m-[20px] lowercase" key={index}>
          {element}
        </span>
      );
    });
  };

  return (
    <div
      id="menu"
      className="flex flex-col items-center justify-center w-full gap-y-[60px]">
      <span className="typeface font-bold text-accent">Меню</span>
      <div className="flex flex-col sm:flex-row w-full sm:w-[80%] gap-y-[80px] items-center">
        <div className="flex flex-col gap-y-[20px] self-start w-full sm:min-w-[25%] sm:max-w-[25%]">
          {positions.map((menuPosition, index) => {
            const category = menuPosition.category;

            const color =
              category === selectedCategory?.category || category === hovered
                ? // @ts-ignore
                  tailwindConfigResolved.theme.colors.white
                : // @ts-ignore
                  tailwindConfigResolved.theme.colors.accent;

            return (
              <div
                onMouseEnter={() => setHovered(category)}
                onMouseLeave={() => setHovered(null)}
                key={index}
                className={`flex flex-row gap-x-[5px] button text-2xl items-center cursor-pointer ${
                  category === selectedCategory?.category
                    ? 'bg-accent'
                    : 'bg-transparent text-accent'
                }
                hover:bg-accent hover:text-button transition-colors`}
                onClick={() => {
                  setSelectedCategory(
                    positions.find(
                      (obj: MenuPosition) => obj.category === category,
                    ),
                  );
                }}>
                {menuPosition?.icon ? (
                  <menuPosition.icon
                    stroke={color}
                    fill={color}
                    className={`h-full stroke-1 w-full`}
                  />
                ) : (
                  ''
                )}
                <span>{category}</span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-[20px] px-[10px] sm:px-[40px] self-start w-full sm:min-w-[75%] sm:max-w-[75%]">
          <div className="flex flex-row gap-x-[5px]">
            {selectedCategory?.icon ? (
              <selectedCategory.icon className="h-full stroke-accent" />
            ) : (
              ''
            )}
            <span className="typeface text-accent font-bold lowercase">
              {selectedCategory?.category}
            </span>
          </div>
          {selectedCategory?.subcategories?.map((category, index) => {
            const length = category.elements
              ? category.elements.length
              : selectedCategory.elements?.length || 5;

            return (
              <div
                className="flex flex-col w-full text-left gap-y-[20px]"
                key={index}>
                <span className="typeface text-accent font-bold lowercase">
                  {category.title}
                </span>

                <div className="flex flex-col gap-y-[20px]">
                  <div
                    className="grid text-left overflow-x-scroll sm:overflow-visible"
                    style={{
                      gridTemplateColumns: `repeat(${length}, 1fr)`,
                    }}>
                    {category.elements
                      ? renderElements(category.elements)
                      : renderElements(selectedCategory?.elements)}

                    {category.positions.map(position => {
                      return (
                        <>
                          <span
                            className="typeface text-xl lowercase border-t-2 border-opacity-50 border-black p-[20px] w-full"
                            style={{
                              paddingLeft: position.padding
                                ? 20 + position.padding
                                : 20,
                            }}>
                            {position.title}
                          </span>
                          {position.prices?.map((price, index) => {
                            return (
                              <span
                                key={index}
                                className="typeface text-xl lowercase border-t-2 border-opacity-50 border-black p-[20px] w-full">
                                {price ? `${price}р.` : ''}
                              </span>
                            );
                          })}
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
