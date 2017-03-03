/**
 *
 */
import { Component, OnInit } from '@angular/core';

import '../../resource/public/styles.css';

@Component({
  selector: 'sg-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title: string = 'Angular-Webpack-MDL';

  public ngOnInit(): void {
    console.log('AppComponent');
  }
}
