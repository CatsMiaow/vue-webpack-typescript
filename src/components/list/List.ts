/**
 * components/list/List.ts
 */
import Vue from 'vue';
import Component from 'vue-class-component';

import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { IUser } from '@/components/list/types.ts';

@Component({
  template: <string>require('./list.html')
})
export class List extends Vue {

  public items: IUser[] = [];
  private url: string = 'https://jsonplaceholder.typicode.com/users';
  private axios: AxiosInstance;

  constructor() {
    super();
    this.axios = axios;
  }

  public mounted(): void {
    this.$nextTick(() => {
      this.loadItems();
    });
  }

  private loadItems(): void {
    if (this.items.length) {
      return;
    }

    this.axios.get(this.url)
      .then((response: AxiosResponse) => {
        this.items = response.data;
      })
      .catch((error: Error) => {
        console.error(error);
      });
  }
}
