import PaperCup from '@/src/components/Menu/Icons/PaperCup';

type NewsPosition = {
  title: string;
  icon?: any;
  content: string;
  image: {src: string; alt: string};
};

type NewsPositions = NewsPosition[];

const positions: NewsPositions = [
  {
    title: 'Autumn Drinks',
    icon: PaperCup,
    content:
      'Новые имбирный какао, чай карамельное яблоко и раф карамель-лемонграсс всего 330 рублей!',
    image: {
      src: 'https://i.pinimg.com/564x/50/f1/7c/50f17c380525acf16c5ad8df185b1554.jpg',
      alt: 'Новые имбирный какао, чай карамельное яблоко и раф карамель-лемонграсс всего 330 рублей!',
    },
  },
];

export default positions;
