/**
 *
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sg-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  public ngOnInit(): void {
    console.log('HeroDetailComponent');
  }
}
