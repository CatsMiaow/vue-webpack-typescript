import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { logger } from '@/utils/logger';

/**
 * HomeComponent
 */
@Component({
  template: require('./home.html')
})
export class Home extends Vue {
  public created(): void {
    logger.info('Home created');
    this.$emit('loading');
  }

  public mounted(): void {
    logger.info('Home mounted');
    this.$nextTick(() => this.$emit('ready'));
  }
}
