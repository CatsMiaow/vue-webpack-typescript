/**
 *
 */
import { Injectable } from '@angular/core';

import { HEROES } from './hero.mock';
import { Hero } from './hero.model';

@Injectable()
export class HeroSearchService {
  public search(term: string): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
