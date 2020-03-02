import axios from 'axios';
import { Loading } from 'quasar';

export default ({ Vue, router, store }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: `${process.env.API_URL}/api`,
  });

  Vue.prototype.$axios.interceptors.request.use(
    (config) => {
      Loading.show();

      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${store.getters['user/getToken']}`,
      };

      return config;
    },
    (err) => {
      Loading.hide();

      return Promise.reject(err);
    },
  );

  Vue.prototype.$axios.interceptors.response.use(
    (res) => {
      Loading.hide();

      return res.data;
    },
    ({ response }) => {
      Loading.hide();

      switch ((response || {}).status) {
        case 401:
          store.dispatch('user/LOGOUT');
          router.push('/');

          break;
        default:
          break;
      }

      return Promise.reject({ ...response.data, status: response.status });
    },
  );
};
