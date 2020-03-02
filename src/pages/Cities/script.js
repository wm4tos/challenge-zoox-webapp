import ListTable from 'components/ListTable';
import MixinNotify from 'mixins/notify';
import HandlerMixin from 'mixins/handlers';

export default {
  name: 'CitiesIndexPage',
  components: {
    ListTable,
  },
  mixins: [
    MixinNotify,
    HandlerMixin,
  ],
  data() {
    return {
      cities: [],
      columns: [
        {
          label: 'ID',
          field: '_id',
          name: '_id',
          align: 'left',
        },
        {
          label: 'Nome',
          field: 'name',
          name: 'name',
          align: 'left',
        },
        {
          label: 'Estado',
          field: 'state',
          name: 'state',
          align: 'left',
          format: ({ UF }) => UF,
        },
        {
          field: 'delete',
          name: 'delete',
        },
      ],
      options: {
        states: [],
      },
      filter: {
        _id: null,
        name: null,
        state: null,
      },
    };
  },
  computed: {
    params() {
      const { filter } = this;

      return {
        ...filter,
        state: filter.state ? filter.state._id : null,
      };
    },
  },
  methods: {
    loadCities() {
      const { params } = this;
      return this.$axios.get('/cities', { params })
        .then(this.citiesSuccess)
        .catch(this.handlerError);
    },
    citiesSuccess({ data: cities }) {
      this.cities = cities;
    },
    redirectToCreate() {
      this.$router.push({ name: 'CreateCity' });
    },
    redirectToEdit({ _id }) {
      this.$router.push({ name: 'EditCity', params: { _id } });
    },
    redirect(event, data) {
      if (data && data._id) return this.redirectToEdit(data);

      return this.redirectToCreate();
    },
    loadStates() {
      return this.$axios.get('/states')
        .then(this.statesSuccess)
        .catch(this.handlerError);
    },
    statesSuccess({ data: states }) {
      this.options.states = states;
    },
    deleteCity({ _id }) {
      return this.$axios.delete(`/cities/${_id}`)
        .then(this.deleteCitySuccess.bind(this, _id))
        .catch(this.handlerError);
    },
    deleteCitySuccess(_id, data) {
      this.showNotifySuccess(data.message);

      this.cities.splice(this.cities.findIndex((c) => c._id === _id), 1);
    },
    loadData() {
      this.loadCities();
      this.loadStates();
    },
  },
  created() {
    this.loadData();
  },
};
