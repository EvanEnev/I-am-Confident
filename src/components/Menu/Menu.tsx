import positions from '@/src/components/Menu/MenuPositions';

export default function Menu() {
  const categories = [
    {
      title: 'Кофе',
      elements: ['объём', '40мл', '250мл', '350мл', '450мл'],
      positions: positions.filter(element => element.category === 'кофе'),
    },
  ];

  return (
    <div
      id="menu"
      className="flex flex-col items-center justify-center w-full gap-y-[60px]">
      <span className="typeface font-bold text-accent">Меню</span>
      <div className="flex flex-col w-[70%] gap-y-[80px] items-center">
        {positions.map((menuPosition, index) => {
          return (
            <div
              className="flex flex-col w-full text-left gap-y-[20px]"
              key={index}>
              <span className="typeface text-accent font-bold lowercase">
                {menuPosition.category}
                <span className="typeface text-accent font-normal lowercase">
                  {menuPosition.subcategory
                    ? ` ${menuPosition.subcategory}`
                    : ''}
                  :
                </span>
              </span>

              <div className="flex flex-col gap-y-[20px]" key={index}>
                <div
                  className="grid text-left"
                  style={{
                    gridTemplateColumns: `repeat(${
                      menuPosition.elements?.length || 5
                    }, minmax(0, 1fr));`,
                  }}>
                  {menuPosition.elements?.map((element, index) => {
                    return (
                      <span
                        className="typeface w-full m-[20px] lowercase"
                        key={index}>
                        {element}
                      </span>
                    );
                  })}

                  {menuPosition.positions.map(position => {
                    return (
                      <>
                        <span
                          className="typeface text-xl lowercase border-t-2 border-opacity-50 border-black p-[20px]"
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
                              className="typeface text-xl lowercase border-t-2 border-opacity-50 border-black p-[20px]">
                              {price}
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
  );
}
