import ListTable from 'components/ListTable';
import MixinNotify from 'mixins/notify';
import HandlerMixin from 'mixins/handlers';

export default {
  name: 'StatesIndexPage',
  components: {
    ListTable,
  },
  mixins: [
    MixinNotify,
    HandlerMixin,
  ],
  data() {
    return {
      states: [],
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
          label: 'UF',
          field: 'UF',
          name: 'UF',
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
    loadStates() {
      const { params } = this;
      return this.$axios.get('/states', { params })
        .then(this.statesSuccess)
        .catch(this.handlerError);
    },
    statesSuccess({ data: states }) {
      this.states = states;
    },
    redirectToCreate() {
      this.$router.push({ name: 'CreateState' });
    },
    redirectToEdit({ _id }) {
      this.$router.push({ name: 'EditState', params: { _id } });
    },
    redirect(event, data) {
      if (data && data._id) return this.redirectToEdit(data);

      return this.redirectToCreate();
    },
    deleteState({ _id }) {
      return this.$axios.delete(`/states/${_id}`)
        .then(this.deleteStateSuccess.bind(this, _id))
        .catch(this.handlerError);
    },
    deleteStateSuccess(_id, data) {
      this.showNotifySuccess(data.message);

      this.states.splice(this.states.findIndex((c) => c._id === _id), 1);
    },
    loadData() {
      this.loadStates();
    },
  },
  created() {
    this.loadData();
  },
};
