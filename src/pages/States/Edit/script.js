import StateForm from 'components/StateForm';
import NotifyMixin from 'mixins/notify';
import HandlerMixin from 'mixins/handlers';

export default {
  name: 'EditStatePage',
  components: {
    StateForm,
  },
  mixins: [
    NotifyMixin,
    HandlerMixin,
  ],
  data() {
    return {
      state: {
        name: '',
        UF: '',
      },
      isLoaded: false,
    };
  },
  methods: {
    loadState() {
      return this.$axios.get(`/states/${this.$route.params._id}`)
        .then(this.loadStateSuccess)
        .catch(this.handlerError);
    },
    loadStateSuccess({ data }) {
      this.state = data;
    },
    saveState(data) {
      return this.$axios.put(`/states/${this.$route.params._id}`, data)
        .then(this.saveStateSuccess)
        .catch(this.handlerError);
    },
    saveStateSuccess({ message }) {
      this.showNotifySuccess(message);

      this.$router.push({ name: 'StatesIndexPage' });
    },
    async loadData() {
      await this.loadState();

      this.isLoaded = true;
    },
  },
  created() {
    this.loadData();
  },
};
