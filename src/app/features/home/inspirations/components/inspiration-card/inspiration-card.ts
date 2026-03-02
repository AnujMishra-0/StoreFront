import { Component, Input, input, InputSignal } from '@angular/core';
import { InspirationCardEntity } from '../../entity/inspirations.entity';
import { NgClass, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-inspiration-card',
  imports: [NgOptimizedImage, NgClass],
  templateUrl: './inspiration-card.html',
  styleUrl: './inspiration-card.css',
})
export class InspirationCard {
  // @Input() card!: Omit<InspirationCardEntity, 'id'>; backward compatibility only
  card = input.required<InspirationCardEntity>();
}
