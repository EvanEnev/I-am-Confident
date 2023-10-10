'use client';

import Steam1 from '@/src/components/Steam/Icons/Steam1';
import Steam2 from '@/src/components/Steam/Icons/Steam2';
import Steam3 from '@/src/components/Steam/Icons/Steam3';
import Steam4 from '@/src/components/Steam/Icons/Steam4';
import {useEffect, useState} from 'react';

export default function Steam() {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (window) {
      setWidth(window.screen.width);
    }
  }, []);

  const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  return (
    <div className="absolute top-0 z-0 max-w-full">
      <div
        className="absolute left-[10vw]"
        style={{top: randomInt(20, 50) + 'vh'}}>
        <Steam1 />
      </div>
      <div
        className="absolute left-[40vw]"
        style={{top: randomInt(20, 50) + 'vh'}}>
        <Steam2 />
      </div>
      <div
        className="absolute left-[70vw] hidden sm:block"
        style={{top: randomInt(20, 50) + 'vh'}}>
        <Steam3 />
      </div>
      <div
        className="absolute left-[90vw] hidden sm:block"
        style={{top: randomInt(20, 50) + 'vh'}}>
        <Steam4 />
      </div>
    </div>
  );
}
