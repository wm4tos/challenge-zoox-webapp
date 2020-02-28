const routes = [
  {
    path: '/',
    component: () => import('layouts/Master'),
    children: [
      { path: '', component: () => import('pages/Auth'), meta: { dontNeedAuth: true } },
      { path: 'home', name: 'HomePage', component: () => import('pages/Home') },
      { path: 'cities', name: 'CitiesIndexPage', component: () => import('pages/Cities') },
      { path: 'states', name: 'StatesIndexPage', component: () => import('pages/States') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404'),
  });
}

export default routes;
