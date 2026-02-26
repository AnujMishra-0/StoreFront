import {Component, Input} from '@angular/core';
import {HERO_MAIN} from '../hero.data';

@Component({
  selector: 'app-hero-main',
  imports: [],
  templateUrl: './hero-main.html',
  styleUrl: './hero-main.css',
})
export class HeroMain {
  @Input() data! : { // ! is there to keep it from complaining about the data not being initialized, since it will be passed in from the parent component
    title : string,
    subtitle : string,
    buttonText : string,
    imageUrl : string
  }
  fun(){
    return "hi"
  }
}
