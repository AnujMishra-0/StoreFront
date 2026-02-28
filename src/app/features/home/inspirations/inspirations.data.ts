import type { InspirationCardEntity } from './entity/inspirations.entity';

export const INSPIRATION_CARDS: InspirationCardEntity[] = [
  {
    id: 1,
    title: 'Say it \n' + 'with Shirt',
    imageUrl: 'assets/features/home/inspirations/inspiration-cards/inspiration-card-1.png',
    isBgDark: true,
    targetUrl: '/products/shirts',
  },
  {
    id: 2,
    title: 'Funky never \n' + 'get old',
    imageUrl: 'assets/features/home/inspirations/inspiration-cards/inspiration-card-2.png',
    isBgDark: true,
    targetUrl: '/products/shirts',
  },
];

export const INSPIRATION_HEADER = {
  title: 'Casual\n' + 'Inspirations',
  description:
    'Our favorite combinations for casual outfit that can inspire you to apply on your daily activity.',
  buttonText: 'BROWSE ALL',
  buttonTargetUrl: '/products',
};
