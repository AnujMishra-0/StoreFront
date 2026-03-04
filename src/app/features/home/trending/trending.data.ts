import { ProductCard } from '../../../shared/entity/product.entity';
import { TrendingItem } from './entity/trending.entity';

export const TRENDING_ITEMS: TrendingItem[] = [
  {
    product: {
      id: 1,
      name: 'Casual Shoe',
      price: 225,
      productImageUrl: 'assets/features/home/trending/trending-product-1.png',
      isWishlisted: true,
    },
    aspect: 'square',
  },

  {
    product: {
      id: 2,
      name: 'Skateboard Shoe',
      price: 125,
      productImageUrl: 'assets/features/home/trending/trending-product-2.png',
      isWishlisted: false,
    },
    aspect: 'square',
  },

  {
    product: {
      id: 3,
      name: 'Skateboard Shoe',
      price: 125,
      productImageUrl: 'assets/features/home/trending/trending-product-3.png',
      isWishlisted: false,
    },
    aspect: 'video',
  },

  {
    product: {
      id: 4,
      name: 'Skateboard Shoe',
      price: 125,
      productImageUrl: 'assets/features/home/trending/trending-product-4.png',
      isWishlisted: false,
    },
    aspect: 'video',
  },

  {
    product: {
      id: 5,
      name: 'Basket Shoe',
      price: 125,
      productImageUrl: 'assets/features/home/trending/trending-product-5.png',
      isWishlisted: false,
    },
    aspect: 'square',
  },

  {
    product: {
      id: 6,
      name: 'Sportwear Shoe',
      price: 159,
      productImageUrl: 'assets/features/home/trending/trending-product-6.png',
      isWishlisted: false,
    },
    aspect: 'square',
  },
];
