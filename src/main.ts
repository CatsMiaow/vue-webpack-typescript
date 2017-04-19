/**
 * main.ts
 */
import Vue from 'vue';

import { Navbar } from '@/components/navbar';
import { router } from '@/router';

import '@/styles/style.css';

// tslint:disable-next-line:no-unused-new
new Vue({
  el: '#app-main',
  router,
  components: {
    navbar: Navbar
  }
});
