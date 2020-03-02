import CityForm from 'components/CityForm';
import NotifyMixin from 'mixins/notify';
import HandlerMixin from 'mixins/handlers';

export default {
  name: 'EditCityPage',
  components: {
    CityForm,
  },
  mixins: [
    NotifyMixin,
    HandlerMixin,
  ],
  data() {
    return {
      isLoaded: false,
      options: {
        states: [],
      },
    };
  },
  methods: {
    loadStates() {
      return this.$axios.get('/states')
        .then(this.loadStatesSuccess)
        .catch(this.handlerError);
    },
    loadStatesSuccess({ data }) {
      this.options.states = data;
    },
    saveCity(data) {
      return this.$axios.post('/cities', data)
        .then(this.saveCitySuccess)
        .catch(this.handlerError);
    },
    saveCitySuccess({ message }) {
      this.showNotifySuccess(message);

      this.$router.push({ name: 'CitiesIndexPage' });
    },
    onSubmit({ state: { _id: state }, ...data }) {
      return this.saveCity({
        state,
        ...data,
      });
    },
    async loadData() {
      await this.loadStates();

      this.isLoaded = true;
    },
  },
  created() {
    this.loadData();
  },
};
