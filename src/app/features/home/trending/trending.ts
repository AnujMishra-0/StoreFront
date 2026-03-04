import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';
import { ProductCard } from '../../../shared/entity/product.entity';
import { TRENDING_ITEMS } from './trending.data';
import { TrendingItem } from './entity/trending.entity';

@Component({
  selector: 'app-trending',
  imports: [ProductCardComponent],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export class Trending {
  data: TrendingItem[] = TRENDING_ITEMS;
}
