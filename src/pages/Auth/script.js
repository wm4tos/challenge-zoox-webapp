import AuthForm from 'components/AuthForm';
import NotifyMixin from 'mixins/notify';

export default {
  name: 'AuthPage',
  components: {
    AuthForm,
  },
  mixins: [NotifyMixin],
  data() {
    return {
      initialValueEmail: '',
      initialValuePassword: '',
    };
  },
  methods: {
    async auth(form) {
      this.$axios.post('/auth', form)
        .then(this.authSuccess)
        .catch(this.authError.bind(this, form));
    },
    authSuccess({ data }) {
      const { user, token } = data;

      this.$store.dispatch('user/SET_USER', user);
      this.$store.dispatch('user/SET_TOKEN', token);

      this.$router.push('/home');
    },
    authError(error) {
      const { data } = error;

      this.showNotifyError(data.message);
    },
  },
};
