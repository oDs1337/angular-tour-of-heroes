import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }

  constructor() { }
}
