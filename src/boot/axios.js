import axios from 'axios';
import { Loading, Notify } from 'quasar';

export default ({ Vue }) => {
  Vue.prototype.$axios = axios.create({
    baseURL: `${process.env.API_URL}/api`,
  });

  axios.interceptors.request.use(
    (req) => {
      Loading.show();
      return req;
    },
    (err) => {
      Loading.hide();
      Promise.reject(err);
    },
  );

  axios.interceptors.response.use(
    (res) => {
      Loading.hide();
      return res;
    },
    ({ response: { data } }) => {
      const { message } = data;

      Notify({
        message,
        color: 'red-9',
      });
    },
  );
};
