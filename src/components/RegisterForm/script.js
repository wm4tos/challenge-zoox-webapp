import AuthForm from 'components/AuthForm';

export default {
  name: 'RegisterForm',
  components: {
    AuthForm,
  },
  data() {
    return {
      name: this.initialValueName,
    };
  },
  props: {
    initialValueName: {
      type: String,
      default: '',
    },
    initialValueEmail: {
      type: String,
      default: '',
    },
    initialValuePassword: {
      type: String,
      default: '',
    },
    onSubmit: {
      type: Function,
      default: null,
    },
  },
  methods: {
    emitSubmit(form) {
      const { name } = this;

      this.$emit('submit', { ...form, name });
    },
  },
};
