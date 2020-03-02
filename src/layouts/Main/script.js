export default {
  name: 'MainLayout',
  data() {
    return {
      drawerLeft: false,
      tabs: [
        {
          title: 'Cidades',
          link: { name: 'CitiesIndexPage' },
        },
        {
          title: 'Estados',
          link: { name: 'StatesIndexPage' },
        },
      ],
    };
  },
};
