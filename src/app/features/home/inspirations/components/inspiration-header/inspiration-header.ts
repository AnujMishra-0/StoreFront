import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InspirationHeaderEntity } from '../../entity/inspirations.entity';

@Component({
  selector: 'app-inspiration-header',
  imports: [RouterLink],
  templateUrl: './inspiration-header.html',
  styleUrl: './inspiration-header.css',
})
export class InspirationHeader {
  header = input.required<InspirationHeaderEntity>();
}
