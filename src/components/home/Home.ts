/**
 * components/home/Home.ts
 */
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  template: <string>require('./home.html')
})
export class Home extends Vue {
  public title: string = 'vue-webpack-typescript';
  public repo: string = 'https://github.com/CatsMiaow/vue-webpack-typescript';
}
