import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '@/views/jobs/JobsView.vue' // @ = src
import JobDetailsView from '@/views/jobs/JobDetailsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/jobs",
    name: "jobs",
    component: JobsView
  },
  // Route parameters
  {
    path: "/jobs/:id", // :id is a route parameter which can accept values of any type
    name: "jobDetails",
    component: JobDetailsView,
    props: true // this route parameters to be accepted as props in the component
  },
  // Redirect
  {
    path: "/all-jobs",  // old/non-existing route to be redirected
    redirect: "jobs"  // existing route to be redirected to
  },
  // Not found
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
