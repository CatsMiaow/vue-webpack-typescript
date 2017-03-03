/**
 *
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Hero, HeroSearchService } from './shared';

@Component({
  selector: 'sg-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
  private router: Router;
  private heroSearchService: HeroSearchService;
  private searchTerms = new Subject<string>();
  public heroes: Observable<Hero[]>;

  constructor(router: Router, heroSearchService: HeroSearchService) {
    this.router = router;
    this.heroSearchService = heroSearchService;
  }

  public search(term: string): void {
    this.searchTerms.next(term);
  }

  public ngOnInit(): void {
    console.log('HeroSearchComponent');

    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap((term: string) => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch((error: any) => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }

  public gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
