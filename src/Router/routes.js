import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue' 
import Services from '../Pages/Services.vue'
import Portfolio from '../Pages/Portfolio.vue'
import Culture from '../Pages/Culture.vue'
import Studio from '../Pages/Studio.vue' 
import Contact from '../Pages/Contact.vue'
import Consultation from '../Pages/Consultation.vue'
import WebAppDevelopment from '../Pages/WebAppDevelopment.vue'
import AppDevelopment from '../Pages/AppDevelopment.vue'
import EcommerceSolutions from '../Pages/EcommerceSolutions.vue'
import NetSuiteIntegrations from '../Pages/NetSuiteIntegrations.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/culture', component: Culture },
  { path: '/studio', component: Studio },
  { path: '/contact', component: Contact },
  { path: '/consultation', component: Consultation },
  { path: '/webappdevelopment', component: WebAppDevelopment },
  { path: '/appdevelopment', component: AppDevelopment },
  { path: '/ecommercesolutions', component: EcommerceSolutions },
  { path: '/netsuiteintegrations', component: NetSuiteIntegrations }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router