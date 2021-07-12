import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import Jobdetails from '../views/jobs/Jobdetails.vue'
import notFound from '../views/notfound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component:()=> import('../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
   {
    path: '/jobs/:id',
    name: 'Jobdetails',
   component: Jobdetails,
    props:true
  },
   //redirect 
  {
    path: '/all-jobs',
    redirect:'/jobs'
    
  },
  //catch all
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component:notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
