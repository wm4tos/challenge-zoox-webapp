import axios from 'axios';
import { Loading } from 'quasar';

export default ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: `${process.env.API_URL}/api`,
  });

  Vue.prototype.$axios.interceptors.request.use(
    (req) => {
      Loading.show();

      return req;
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
    (err) => {
      Loading.hide();

      return Promise.reject(err.response);
    },
  );
};
