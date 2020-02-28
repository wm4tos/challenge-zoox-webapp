import { mapGetters } from 'vuex';

import AuthLayout from 'layouts/Auth';
import MainLayout from 'layouts/Main';

export default {
  name: 'LayoutMaster',
  components: {
    AuthLayout,
    MainLayout,
  },
  computed: {
    ...mapGetters({
      isLogged: 'user/isLogged',
    }),
  },
};
