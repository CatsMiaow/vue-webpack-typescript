/**
 *
 */
import { Injectable } from '@angular/core';

import { HEROES } from './hero.mock';
import { Hero } from './hero.model';

@Injectable()
export class HeroService {
  public getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // public getHero(id: number): Promise<Hero> {}
  // public delete(id: number): Promise<void> {}
  // public create(name: string): Promise<Hero> {}
  // public update(hero: Hero): Promise<Hero> {}
}
