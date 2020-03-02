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
      city: {
        name: '',
        state: {},
      },
      options: {
        states: [],
      },
    };
  },
  methods: {
    loadCity() {
      return this.$axios.get(`/cities/${this.$route.params._id}`)
        .then(this.loadCitySuccess)
        .catch(this.handlerError);
    },
    loadCitySuccess({ data }) {
      this.city = data;
    },
    loadStates() {
      return this.$axios.get('/states')
        .then(this.loadStatesSuccess)
        .catch(this.handlerError);
    },
    loadStatesSuccess({ data }) {
      this.options.states = data;
    },
    saveCity(data) {
      return this.$axios.put(`/cities/${this.$route.params._id}`, data)
        .then(this.saveCitySuccess)
        .catch(this.handlerError);
    },
    saveCitySuccess({ message }) {
      this.showNotifySuccess(message);

      this.$router.push({ name: 'CitiesIndexPage' });
    },
    async loadData() {
      await this.loadCity();
      await this.loadStates();

      this.isLoaded = true;
    },
  },
  created() {
    this.loadData();
  },
};
