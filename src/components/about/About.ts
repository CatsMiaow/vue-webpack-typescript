import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import { logger } from '@/utils/logger';

/**
 * AboutComponent
 */
@Component({
  template: require('./about.html')
})
export class About extends Vue {
  public created(): void {
    logger.info('About created');
    this.$emit('loading');
  }

  public mounted(): void {
    logger.info('About mounted');
    this.$nextTick(() => this.$emit('ready'));
  }
}
