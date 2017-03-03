/**
 *
 */
import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from './shared';

@Component({
  selector: 'sg-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  private heroService: HeroService;
  public heroes: Hero[] = [];

  constructor(heroService: HeroService) {
    this.heroService = heroService;
  }

  public ngOnInit(): void {
    console.log('HeroComponent');

    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
}
