export default {
  name: 'AuthForm',
  data() {
    return {
      visible: false,
      hovering: false,
      form: {
        email: this.initialValueEmail,
        password: this.initialValuePassword,
      },
    };
  },
  props: {
    onSubmit: {
      type: Function,
      default: null,
    },
    initialValueEmail: {
      type: String,
      default: '',
    },
    initialValuePassword: {
      type: String,
      default: '',
    },
  },
  computed: {
    visibleIcon() {
      if (this.hovering) return this.visible ? 'visibility_off' : 'visibility';

      return !this.visible ? 'visibility_off' : 'visibility';
    },
  },
};
