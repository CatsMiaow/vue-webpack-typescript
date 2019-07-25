import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Route } from 'vue-router';

import { ILink } from '@/components/navbar/types.ts';
import { logger } from '@/utils/logger';

/**
 * NavbarComponent
 */
@Component({
  template: require('./navbar.html'),
  watch: {
    $route(current: Route, previous: Route): void {
      logger.info(`Changed current path to: ${this.$route.path}`);
    }
  }
})
export class Navbar extends Vue {
  public links: ILink[] = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'List', path: '/list' }
  ];

  public mounted(): void {
    this.$nextTick(() => logger.info('Navbar mounted'));
  }
}
