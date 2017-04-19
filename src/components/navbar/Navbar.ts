/**
 * components/navbar/Navbar.ts
 */
import Vue from 'vue';
import Component from 'vue-class-component';

import { ILink } from '@/components/navbar/types.ts';
import { logger } from '@/utils/logger';

@Component({
  template: <string>require('./navbar.html')
})
export class Navbar extends Vue {
  public inverted: boolean = true;
  public links: ILink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'List', path: '/list' }
  ];

  // @watch('$route.path')
  public pathChanged(): void {
    logger.info('Changed current path to: ' + this.$route.path);
  }

  public mounted(): void {
    this.$nextTick(() => logger.info('Default object property'));
  }
}
