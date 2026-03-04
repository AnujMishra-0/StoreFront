import { ProductCard } from '../../../../shared/entity/product.entity';

export interface TrendingItem {
  product: ProductCard;
  aspect: 'square' | 'video';
}
