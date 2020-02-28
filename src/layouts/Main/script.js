export default {
  name: 'MainLayout',
  data() {
    return {
      drawerLeft: false,
      tabs: [
        {
          title: 'Cidades',
          link: 'cities',
        },
        {
          title: 'Estados',
          link: 'states',
        },
      ],
    };
  },
};
