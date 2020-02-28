import { mapGetters } from 'vuex';

export default {
  name: 'HomePage',
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
  },
};
