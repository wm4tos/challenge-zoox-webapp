const routes = [
  {
    path: '/',
    component: () => import('layouts/Master'),
    children: [
      { path: '', component: () => import('pages/Auth'), meta: { dontNeedAuth: true } },
      { path: 'home', component: () => import('pages/Home') },
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
