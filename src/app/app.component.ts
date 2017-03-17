import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Hall of Heros';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }  

  // select a hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
}