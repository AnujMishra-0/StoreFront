import { Component } from '@angular/core';
import { INSPIRATION_HEADER } from '../../inspirations.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inspiration-header',
  imports: [RouterLink],
  templateUrl: './inspiration-header.html',
  styleUrl: './inspiration-header.css',
})
export class InspirationHeader {
  data = INSPIRATION_HEADER;
}
