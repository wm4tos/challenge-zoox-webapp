export default {
  methods: {
    showNotifyError(message, opts = {}) {
      const defaultOptions = {
        message,
        color: 'red-9',
      };

      this.$q.notify({ ...defaultOptions, opts });
    },
  },
};
