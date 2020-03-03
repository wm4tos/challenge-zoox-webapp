const routes = [
  {
    path: '/',
    component: () => import('layouts/Master'),
    children: [
      { path: '', component: () => import('pages/Auth'), meta: { dontNeedAuth: true } },
      { path: 'home', name: 'HomePage', component: () => import('pages/Home') },
      { path: 'cities', name: 'CitiesIndexPage', component: () => import('pages/Cities') },
      { path: 'cities/new', name: 'CreateCity', component: () => import('pages/Cities/Create') },
      { path: 'cities/:_id', name: 'EditCity', component: () => import('pages/Cities/Edit') },
      { path: 'states', name: 'StatesIndexPage', component: () => import('pages/States') },
      { path: 'states/new', name: 'CreateState', component: () => import('pages/States/Create') },
      { path: 'states/:_id', name: 'EditState', component: () => import('pages/States/Edit') },
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
