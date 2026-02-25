import { Component } from '@angular/core';
import {HeroMain} from './hero-main/hero-main';

@Component({
  selector: 'app-hero',
  imports: [HeroMain],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

}
