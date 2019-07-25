import Vue from 'vue';
import Vuetify from 'vuetify';

import { Navbar } from '@/components/navbar';
import { router } from '@/router';
import { logger } from '@/utils';

Vue.use(Vuetify);

// tslint:disable-next-line: no-unused-expression
new Vue({
  el: '#app-main',
  // https://github.com/vuetifyjs/vuetify/issues/6895#issuecomment-510640903
  vuetify: new Vuetify(),
  router,
  data: { loading: true },
  components: {
    navbar: Navbar
  },
  created(): void {
    logger.info('Created');
  },
  mounted(): void {
    logger.info('Mounted');
  },
  methods: {}
});
