const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'login', component: () => import('pages/LoginPage.vue') },
      { path: 'register', name: 'register', component: () => import('pages/RegisterPage.vue') },
      { path: 'password_reset', name: 'password_reset', component: () => import('pages/ForgotPasswordPage.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/DashboardLayout.vue'),
    children: [
      { path: '', name: 'dashboard', component: () => import('src/pages/Dashboard/Store/DealsPage.vue') },
      { path: ':id', name: 'deal', component: () => import('src/pages/Dashboard/Store/DealDetailPage.vue') },
      { path: 'cart', name: 'cart', component: () => import('src/pages/Dashboard/Store/CartPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes