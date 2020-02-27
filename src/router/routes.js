import storeLoader from 'src/store';

const store = storeLoader();
const isLogged = store.getters['user/isLogged'];

const auth = [
  {
    path: '/',
    component: () => import('layouts/Auth'),
    children: [
      { path: '', component: () => import('pages/Auth') },
    ],
  },
];

const routes = [
  {
    path: '/',
    component: () => import('layouts/Main'),
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  if (!isLogged) {
    auth.push({
      path: '*',
      component: () => import('pages/Error401'),
    });
  } else {
    routes.push({
      path: '*',
      component: () => import('pages/Error404'),
    });
  }
}

export default store.getters['user/isLogged'] ? routes : auth;
