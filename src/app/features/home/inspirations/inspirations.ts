import { Component } from '@angular/core';
import { InspirationCard } from './components/inspiration-card/inspiration-card';
import { InspirationCardEntity } from './entity/inspirations.entity';
import { INSPIRATION_CARDS, INSPIRATION_HEADER } from './inspirations.data';
import { InspirationHeader } from './components/inspiration-header/inspiration-header';

@Component({
  selector: 'app-inspirations',
  imports: [InspirationCard, InspirationHeader],
  templateUrl: './inspirations.html',
  styleUrl: './inspirations.css',
})
export class Inspirations {
  cards: InspirationCardEntity[] = INSPIRATION_CARDS;
  header = INSPIRATION_HEADER;
}
