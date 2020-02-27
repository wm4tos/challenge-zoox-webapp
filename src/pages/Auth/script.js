import AuthForm from 'components/AuthForm';

export default {
  name: 'AuthPage',
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  components: {
    AuthForm,
  },
};
