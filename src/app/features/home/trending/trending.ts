import { Component } from '@angular/core';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-trending',
  imports: [ProductCardComponent],
  templateUrl: './trending.html',
  styleUrl: './trending.css',
})
export class Trending {}
