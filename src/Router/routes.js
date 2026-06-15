import { createRouter, createWebHashHistory } from 'vue-router' // 👈 1. Changed createWebHistory to createWebHashHistory

import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue' 
import Services from '../Pages/Services.vue'
import Portfolio from '../Pages/Portfolio.vue'
import Culture from '../Pages/Culture.vue'
import Studio from '../Pages/Studio.vue' 
import Contact from '../Pages/Contact.vue'
import Consultation from '../Pages/Consultation.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/culture', component: Culture },
  { path: '/studio', component: Studio },
  { path: '/contact', component: Contact },
  { path: '/consultation', component: Consultation }
]

const router = createRouter({
  history: createWebHashHistory(), // 👈 2. Updated this line to use hash history
  routes
})

export default router