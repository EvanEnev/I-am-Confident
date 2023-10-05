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
    <div className="flex flex-row justify-between min-w-screen w-full items-center top-0 z-10 p-[20px] bg-[#fcf5e8] border-b-black border-b-2 border-opacity-30">
      <div className="flex flex-row">
        <span className="typeface text-accent font-bold">I am Confident</span>
      </div>
      <div className="flex flex-row gap-[10px]">
        {buttons.map(({name, href}, index) => {
          return (
            <a
              key={index}
              href={href}
              rel="_blank"
              className={`typeface button hover:opacity-100 transition-opacity ${
                active === name ? 'opacity-100' : 'opacity-50'
              }`}
              onClick={() => {
                setActive(name);
              }}>
              {name}
            </a>
          );
        })}
      </div>
    </div>
  );
}
