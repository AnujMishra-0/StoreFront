import { Component, Input } from '@angular/core';
import { HERO_FEATURES } from '../hero.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-features',
  imports: [CommonModule],
  templateUrl: './hero-features.html',
  styleUrl: './hero-features.css',
})
export class HeroFeatures {
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() bgDark!: boolean;
}
