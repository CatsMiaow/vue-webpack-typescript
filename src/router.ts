/**
 * router.ts
 */
import * as Vue from 'vue';
import * as Router from 'vue-router';

import * as component from '@/components';

Vue.use(Router);

export const router: Router = new Router({
  routes: [
    { path: '/', component: component.Home },
    { path: '/about', component: component.About },
    { path: '/list', component: component.List }
  ]
});
