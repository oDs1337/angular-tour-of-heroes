import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  heroes: Hero[] = [];

  selectedHero?: Hero;
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
