export default {
  name: 'CityForm',
  data() {
    return {
      form: { ...this.initialValues },
    };
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    initialValues: {
      type: Object,
      default: () => ({
        name: '',
        state: null,
      }),
    },
    onSubmit: {
      type: Function,
      required: true,
    },
  },
};
