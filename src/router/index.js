import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Create',
    component: () => import('../views/Create.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Calculator.vue')
  },
  {
    path: '/savings',
    name: 'Savings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Savings.vue')
  },
  {
    path: '/probonoform',
    name: 'ProBonoForm',
    component: () => import('../views/Forms/ProBono.vue')
  },
  {
    path: '/userform',
    name: 'UserForm',
    component: () => import('../views/Forms/User.vue')
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Chart.vue')
  },

  {
    path: '/financialadvisors',
    name: 'FinancialAdvisors',
    component: () => import('../views/FinancialAdvisors.vue')
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: () => import('../views/Homepage.vue')
  },

  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../views/Articles.vue')
  },
  {
    path: '/expense',
    name: 'Expense',
    component: () => import('../views/ExpenseTracker.vue')
  },
  {
    path: '/report',
    name: 'Report',
    component: () => import('../views/Forms/Report.vue')
  }
  {
    path: '/clients',
    name: 'Clients',
    component: () => import('../views/Clients.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to, from, next) => {
//   var loginCheck = window.sessionStorage;
//   if (loginCheck.login == 1 && to.path != "/") {
//     console.log("Hello");
//     next();
//     console.log("Hello");
//   } else {
    
//     next({
//       path: '/',
//     });
//   }
// });

export default router
