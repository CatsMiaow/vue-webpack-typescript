import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Axios, { AxiosInstance, AxiosResponse } from 'axios';

import { IUser } from '@/components/list/types.ts';
import { logger } from '@/utils/logger';

// https://router.vuejs.org/guide/advanced/data-fetching.html
// https://github.com/vuejs/vue-class-component#adding-custom-hooks

/**
 * HomeComponent
 */
@Component({
  template: require('./list.html')
})
export class List extends Vue {
  public items: IUser[] = [];
  private readonly url: string = 'https://jsonplaceholder.typicode.com/users';
  private readonly axios: AxiosInstance;

  constructor() {
    super();
    this.axios = Axios;
  }

  public async created(): Promise<void> {
    logger.info('List created');
    this.$emit('loading');
    await this.fetchData();
  }

  public mounted(): void {
    logger.info('List mounted');
    this.$nextTick(() => this.$emit('ready'));
  }

  private async fetchData(): Promise<void> {
    if (this.items.length) {
      return;
    }

    try {
      const response: AxiosResponse = await this.axios.get(this.url);
      this.items = response.data;
    } catch (err) {
      logger.error(err);
    }
  }
}
