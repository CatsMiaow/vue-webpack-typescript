import Vue from 'vue';
import VueRouter from 'vue-router';

import * as component from '@/components';

Vue.use(VueRouter);

export const router: VueRouter = new VueRouter({
  routes: [
    { path: '/', component: component.Home },
    { path: '/about', component: component.About },
    { path: '/list', component: component.List }
  ]
});
