import { Component } from '@angular/core';
import {HeroMain} from './hero-main/hero-main';
import {HeroFeatures} from './hero-features/hero-features';
import {HERO_FEATURES, HERO_MAIN} from './hero.data';

@Component({
  selector: 'app-hero',
  imports: [HeroMain, HeroFeatures],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  Main = HERO_MAIN;
  Cards = HERO_FEATURES;
}
