export default {
  name: 'StateForm',
  data() {
    return {
      form: { ...this.initialValues },
    };
  },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    initialValues: {
      type: Object,
      default: () => ({
        name: '',
        UF: '',
      }),
    },
  },
};
