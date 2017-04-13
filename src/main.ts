/**
 * main.ts
 */
import * as Vue from 'vue';

import { Navbar } from '@/components/navbar';
import { router } from '@/router';

// tslint:disable-next-line:no-unused-new
new Vue({
  el: '#app-main',
  router,
  components: {
    navbar: Navbar
  }
});
