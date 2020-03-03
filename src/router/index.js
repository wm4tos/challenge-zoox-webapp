import Vue from 'vue';
import VueRouter from 'vue-router';
import moment from 'moment';

import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function ({ store }) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  Router.beforeEach((to, from, next) => {
    if (
      (store.getters['user/isLogged']
      && store.getters['user/getLoginHour']
      && moment(store.getters['user/getLoginHour']).isSameOrAfter(moment().subtract({ hour: 1 })))
      || to.meta.dontNeedAuth
    ) {
      next();
    } else {
      next({ path: '' });
    }
  });

  return Router;
}
