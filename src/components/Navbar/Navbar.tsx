'use client';

import {useState} from 'react';

export default function Navbar() {
  const [active, setActive] = useState<string>('Главная');

  const buttons: {name: string; href: string}[] = [
    {name: 'Главная', href: '#news'},
    {name: 'Меню', href: '#menu'},
    {name: 'Контакты', href: '#contacts'},
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between sticky min-w-screen w-full items-center top-0 z-10 p-[20px] bg-[#fcf5e8] border-b-accent border-b-2 border-opacity-30 rounded-t-[20px]">
      <div className="flex flex-col items-end">
        <span className="typeface text-accent font-bold">I am Confident</span>
        <span className="typeface text-accent text-[22px]">кофейня</span>
      </div>
      <nav>
        <ul className="gap-[10px] grid grid-rows-2 sm:grid-rows-1 grid-flow-col">
          {buttons.map(({name, href}, index) => {
            return (
              <li key={index}>
                <a
                  href={href}
                  rel="_blank"
                  className={`typeface btn btn-primary ${
                    active === name ? '' : 'btn-outline'
                  }`}
                  onClick={() => {
                    setActive(name);
                  }}>
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
