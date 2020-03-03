import AuthForm from 'components/AuthForm';
import RegisterForm from 'components/RegisterForm';
import NotifyMixin from 'mixins/notify';
import MapperMixin from 'mixins/mapper';

export default {
  name: 'AuthPage',
  components: {
    AuthForm,
    RegisterForm,
  },
  mixins: [
    NotifyMixin,
    MapperMixin,
  ],
  data() {
    return {
      initialValueEmail: '',
      initialValuePassword: '',
      isRegistering: false,
    };
  },
  methods: {
    auth(data) {
      this.$axios.post('/auth', data)
        .then(this.authSuccess)
        .catch(this.authError.bind(this, data));
    },
    authSuccess({ data }) {
      const { user, token } = data;

      this.$store.dispatch('user/SET_USER', user);
      this.$store.dispatch('user/SET_TOKEN', token);
      this.$store.dispatch('user/SET_LOGIN_HOUR', Date.now());

      this.$router.push('/home');
    },
    authError(data, error) {
      const { message, status } = error;

      switch (status) {
        case 404:
          this.switchToRegister(data);
          break;
        case 400:
          this.showNotifyError(this.mapBadRequestMessage(message));
          break;
        default:
          this.showNotifyError(message);
      }
    },
    switchToRegister({ email = '', password = '' } = {}) {
      this.initialValueEmail = email;
      this.initialValuePassword = password;

      this.isRegistering = true;
    },
    register(data) {
      this.$axios.post('/users/register', data)
        .then(this.mapRegisterSuccess)
        .then(this.registerSuccess.bind(this, data.password))
        .catch(this.registerError);
    },
    mapRegisterSuccess({ data }) {
      return data.email;
    },
    registerSuccess(password, email) {
      this.auth({ email, password });
    },
    registerError(error) {
      const { data } = error;

      this.showNotifyError(data.message);
    },
  },
};
