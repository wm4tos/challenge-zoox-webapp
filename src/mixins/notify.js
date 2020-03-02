export default {
  methods: {
    showNotifyError(message, opts = {}) {
      const defaultOptions = {
        message,
        color: 'red-9',
      };

      this.$q.notify({ ...defaultOptions, ...opts });
    },
    showNotifySuccess(message, opts = {}) {
      const defaultOptions = {
        message,
        color: 'green',
      };

      this.$q.notify({ ...defaultOptions, ...opts });
    },
  },
};
