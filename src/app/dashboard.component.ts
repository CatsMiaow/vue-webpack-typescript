/**
 *
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero, HeroService } from './hero/shared';

@Component({
  selector: 'sg-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private router: Router;
  private heroService: HeroService;
  public heroes: Hero[] = [];

  constructor(router: Router, heroService: HeroService) {
    this.router = router;
    this.heroService = heroService;
  }

  public ngOnInit(): void {
    console.log('DashboardComponent');

    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }

  public gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
