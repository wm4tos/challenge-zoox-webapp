export default {
  methods: {
    emitToFather(form) {
      return (key) => (value) => this.$emit('input', Object.assign(form, { [key]: value }));
    },
  },
};
