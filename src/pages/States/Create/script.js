import StateForm from 'components/StateForm';
import NotifyMixin from 'mixins/notify';
import HandlerMixin from 'mixins/handlers';

export default {
  name: 'CreateStatePage',
  components: {
    StateForm,
  },
  mixins: [
    NotifyMixin,
    HandlerMixin,
  ],
  methods: {
    saveState(data) {
      return this.$axios.post('/states', data)
        .then(this.saveStateSuccess)
        .catch(this.handlerError);
    },
    saveStateSuccess({ message }) {
      this.showNotifySuccess(message);

      this.$router.push({ name: 'StatesIndexPage' });
    },
  },
};
