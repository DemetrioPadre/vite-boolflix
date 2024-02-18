// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import AppSeries from './components/AppSeries.vue';
import AppSearch from './components/AppSearch.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/search', component: AppSearch },
    { path: '/series', component: AppSeries }
];

const router = new VueRouter({
    routes
});

export default router;
