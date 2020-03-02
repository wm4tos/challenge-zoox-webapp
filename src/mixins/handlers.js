import NotifyMixin from './notify';

export default {
  mixins: [
    NotifyMixin,
  ],
  methods: {
    handlerError(err) {
      if (err.message) this.showNotifyError(err.message);
    },
  },
};
