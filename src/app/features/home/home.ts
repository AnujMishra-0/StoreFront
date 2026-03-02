import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Inspirations } from './inspirations/inspirations';
import { Trending } from './trending/trending';

@Component({
  selector: 'app-home',
  imports: [Hero, Inspirations, Trending],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
