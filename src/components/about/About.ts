/**
 * components/about/About.ts
 */
import * as Vue from 'vue';
import Component from 'vue-class-component';

import { logger } from '@/utils/logger';

@Component({
  template: <string>require('./about.html')
})
export class About extends Vue {
  public repo: string = 'https://github.com/CatsMiaow/vue-webpack-typescript';

  public mounted(): void {
    this.$nextTick(() => logger.info('About ready'));
  }
}
