import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../Pages/Home.vue'
import About from '../Pages/About.vue' 
import Services from '../Pages/Services.vue'
import Portfolio from '../Pages/Portfolio.vue'
import Culture from '../Pages/Culture.vue'
import Studio from '../Pages/Studio.vue' 
import Policies from '../Pages/Policies.vue'
import Consultation from '../Pages/Consultation.vue'
import WebAppDevelopment from '../Pages/WebAppDevelopment.vue'
import AppDevelopment from '../Pages/AppDevelopment.vue'
import EcommerceSolutions from '../Pages/EcommerceSolutions.vue'
import NetSuiteIntegrations from '../Pages/NetSuiteIntegrations.vue'
import ReplacementGlass from '../Pages/ReplacementGlass.vue'
import BookLibraryAppPage from '../Pages/BookLibraryAppPage.vue'
import MagentoConnectorAppPage from '../Pages/MagentoConnectorAppPage.vue'
import MyExpenseTrackerAppPage from '../Pages/MyExpenseTrackerAppPage.vue'
import TaylorAllergyAppPage from '../Pages/TaylorAllergyAppPage.vue'
import ShopifyServicesPage from '../Pages/ShopifyServicesPage.vue'

import AppDevelopmentBlogPage from '../Pages/AppDevelopmentBlogPage.vue'
import WebDevelopmentBlogPage from '../Pages/WebDevelopmentBlogPage.vue'
import MagentoBlogPage from '../Pages/MagentoBlogPage.vue'
import NetsuiteBlogPage from '../Pages/NetsuiteBlogPage.vue'
import ShopifyBlogPage from '../Pages/ShopifyBlogPage.vue'

import WebProject1 from '../Pages/WebProject1.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/portfolio', component: Portfolio },
  { path: '/culture', component: Culture },
  { path: '/studio', component: Studio },
  { path: '/policies', component: Policies },
  { path: '/consultation', component: Consultation },
  { path: '/webappdevelopment', component: WebAppDevelopment },
  { path: '/appdevelopment', component: AppDevelopment },
  { path: '/ecommercesolutions', component: EcommerceSolutions },
  { path: '/netsuiteintegrations', component: NetSuiteIntegrations },
  { path: '/replacementglass', component: ReplacementGlass },
  { path: '/booklibraryapppage', component: BookLibraryAppPage },
  { path: '/magentoconnectorapppage', component: MagentoConnectorAppPage },
  { path: '/myexpensetrackerapppage', component: MyExpenseTrackerAppPage },
  { path: '/taylorallergyapppage', component: TaylorAllergyAppPage },
  { path: '/shopifyservicespage', component: ShopifyServicesPage},
  { path: '/appdevelopmentblogpage', component: AppDevelopmentBlogPage},
  { path: '/webdevelopmentblogpage', component: WebDevelopmentBlogPage},
  { path: '/magentoblogpage', component: MagentoBlogPage},
  { path:  '/netsuiteblogpage', component: NetsuiteBlogPage},
  { path:  '/shopifyblogpage', component: ShopifyBlogPage},
  { path:  '/webproject1'    , component: WebProject1 }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router