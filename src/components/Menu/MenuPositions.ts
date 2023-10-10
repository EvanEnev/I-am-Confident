import React from 'react';
import Cup from '@/src/components/Menu/Icons/Cup';
import PaperCup from '@/src/components/Menu/Icons/PaperCup';
import ColdCup from '@/src/components/Menu/Icons/ColdCup';
import Donut from '@/src/components/Menu/Icons/Donut';

type Position = {
  title: string;
  padding?: number;
  prices: (null | number | string)[];
};

type SubCategory = {
  title: string | null;
  elements?: string[];
  positions: Position[];
};

export type MenuPosition = {
  category: string;
  icon?: any;
  elements?: string[];
  subcategories?: SubCategory[];
};

const sizes = ['объём', '40мл', '250мл', '350мл', '450мл'];
const teaSizes = ['объём', '350мл', '550мл'];
const foodSizes = ['название', 'цена'];

const positions: MenuPosition[] = [
  {
    category: 'кофе',
    elements: sizes,
    icon: Cup,
    subcategories: [
      {
        title: 'черный',
        positions: [
          {
            title: 'эспрессо',
            prices: [150, null, null, null],
          },
          {
            title: 'американо',
            prices: [null, 200, 220, null],
          },
          {
            title: 'фильтр',
            prices: [null, 210, 230, null],
          },
          {
            title: 'v60',
            prices: [null, 300, null, null],
          },
        ],
      },
      {
        title: 'с молоком',
        positions: [
          {
            title: 'флэт уайт',
            prices: [null, 210, null, null],
          },
          {
            title: 'капучино',
            prices: [null, null, 210, 240],
          },
          {
            title: 'латте',
            prices: [null, null, 210, 240],
          },
          {
            title: 'раф',
            prices: [null, null, 320, 340],
          },
          {
            title: 'какао',
            prices: [null, null, 210, 240],
          },
          {
            title: 'матча',
            prices: [null, 300, null, null],
          },
        ],
      },
      {
        title: 'альтернативное молоко',
        elements: ['название', 'цена'],
        positions: [
          {title: 'миндальное', prices: ['+90']},
          {title: 'кокосовое', prices: ['+90']},
          {title: 'банановое', prices: ['+90']},
          {title: 'овсяное', prices: ['+90']},
        ],
      },
    ],
  },
  {
    category: 'авторские напитки',
    elements: sizes,
    icon: PaperCup,
    subcategories: [
      {
        title: null,
        positions: [
          {
            title: 'латте халва',
            prices: [null, null, null, 310],
          },
          {
            title: 'цитрусовый раф',
            prices: [null, null, null, 340],
          },
          {
            title: 'лавандовый раф',
            prices: [null, null, null, 340],
          },
          {
            title: 'мажжевеловый раф',
            prices: [null, null, null, 340],
          },
          {
            title: 'сникерс капучино',
            prices: [null, null, null, 360],
          },
          {
            title: 'облепиховый чай',

            prices: [null, null, null, 320],
          },
          {title: 'масала', prices: [null, null, null, 300]},
        ],
      },
    ],
  },
  {
    category: 'холодные напитки',
    elements: sizes,
    icon: ColdCup,
    subcategories: [
      {
        title: null,
        positions: [
          {
            title: 'морс',
            prices: [null, null, 75, 100],
          },
          {title: 'бамбл', prices: [null, null, 300, null]},
          {
            title: 'айс латте',
            prices: [null, null, null, 300],
          },
          {
            title: 'эспрессо-тоник',
            prices: [null, null, 300, null],
          },
          {
            title: 'лимонад кокос-ежевика',
            prices: [null, null, null, 250],
          },
        ],
      },
    ],
  },
  {
    category: 'фреши',
    elements: sizes,
    icon: ColdCup,
    subcategories: [
      {
        title: null,
        positions: [
          {title: 'апельсин', prices: [null, null, 300, 400]},
          {title: 'грейпфрут', prices: [null, null, 300, 400]},
        ],
      },
    ],
  },
  {
    category: 'смузи',
    elements: sizes,
    icon: ColdCup,
    subcategories: [
      {
        title: null,
        positions: [
          {title: 'розовый', prices: [null, null, 330, null]},
          {title: 'желтый', prices: [null, null, 330, null]},
        ],
      },
    ],
  },
  {
    category: 'чай',
    elements: teaSizes,
    icon: Cup,
    subcategories: [
      {
        title: null,
        positions: [
          {title: 'букет трав для души', prices: [150, 250]},
          {title: 'сенча', prices: [150, 250]},
          {title: 'молочный улун', prices: [150, 250]},
          {title: 'таежный', prices: [150, 250]},
          {title: 'фруктовый', prices: [150, 250]},
          {title: 'жасмин', prices: [150, 250]},
          {title: 'ассам', prices: [150, 250]},
          {title: 'эрл грей', prices: [150, 250]},
        ],
      },
    ],
  },
  {
    category: 'завтраки',
    elements: foodSizes,
    icon: Donut,
    subcategories: [
      {
        title: null,
        positions: [
          {title: 'овсяная каша с карамелью', prices: [250]},
          {title: 'овсяная каша авторская', prices: [290]},
          {title: 'английский завтрак', prices: [450]},
          {title: 'французский завтрак', prices: [450]},
          {title: 'шакшука', prices: [350]},
          {title: 'омлет с лососем', prices: [450]},
          {title: 'скрембл брускетта', prices: [300]},
          {title: 'бенедикт с лососем', prices: [500]},
          {title: 'брускетта с лососем', prices: [470]},
          {title: 'яичница или омлет из трех яиц', prices: [200]},
          {title: 'начинка для яиц:', prices: [null]},
          {title: 'зерновой тост', prices: [60], padding: 20},
          {title: 'яйцо', prices: [100], padding: 20},
          {title: 'шампиньоны', prices: [290], padding: 20},
          {title: 'охотничья колбаска', prices: [290], padding: 20},
          {title: 'бекон', prices: [290], padding: 20},
          {title: 'авокадо', prices: [290], padding: 20},
          {title: 'лосось', prices: [290], padding: 20},
          {title: 'креветки', prices: [290], padding: 20},
          {title: 'сырники классические', prices: [400]},
          {title: 'сырники без сахара', prices: [400]},
          {title: 'блины классические', prices: [300]},
          {title: 'блины с творогом', prices: [300]},
          {title: 'соусы:', prices: [null]},
          {title: 'карамельный соус', prices: ['+90'], padding: 20},
          {title: 'джем малиновый', prices: ['+90'], padding: 20},
          {title: 'сметана', prices: ['+90'], padding: 20},
          {title: 'мед', prices: ['+90'], padding: 20},
        ],
      },
    ],
  },
  {
    category: 'салаты',
    elements: foodSizes,
    icon: Donut,
    subcategories: [
      {
        title: null,
        positions: [
          {title: 'боул с креветками', prices: [500]},
          {title: 'боул с лососем', prices: [500]},
          {title: 'греческий', prices: [300]},
          {title: 'цезарь с курице', prices: [450]},
          {title: 'цезарь с лососем', prices: [500]},
          {title: 'цезарь с креветками', prices: [500]},
          {title: 'зеленый салат с креветками', prices: [500]},
          {title: 'зеленый салат с лососем и спаржей', prices: [450]},
        ],
      },
    ],
  },
  {
    category: 'бранчи',
    elements: foodSizes,
    icon: Donut,
    subcategories: [
      {
        title: null,
        positions: [
          {title: 'суп дня', prices: [250]},
          {title: 'томатный суп', prices: [300]},
          {title: 'спагетти neri с лососем', prices: [540]},
          {title: 'спагетти карбонара', prices: [450]},
          {title: 'фетучини с курицей и грибами', prices: [450]},
          {title: 'котлеты из цыплёнка с картофельным пюре', prices: [500]},
        ],
      },
      {
        title: 'азиатское меню',
        positions: [
          {title: 'том ям с креветками', prices: [550]},
          {title: 'гречневая лапма с овощами', prices: [350]},
          {title: 'рисовая лапша с курицей', prices: [400]},
          {title: 'рисовая лапша с креветками', prices: [500]},
        ],
      },
    ],
  },
  {
    category: 'сэндвичи',
    elements: foodSizes,
    icon: Donut,
    subcategories: [
      {
        title: null,
        positions: [
          {title: 'сэндвич с тунцом', prices: [450]},
          {title: 'сэндвич с беконом', prices: [400]},
          {title: 'сэндвич с курицей', prices: [400]},
          {title: 'сэндвич с лососем', prices: [450]},
        ],
      },
    ],
  },
];

export default positions;
