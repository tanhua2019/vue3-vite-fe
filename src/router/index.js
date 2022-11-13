import { createRouter, createWebHashHistory } from 'vue-router'
import { isMobileTerminal } from '@/utils'
import mobileRoutes from './mobile-routes'
import pcRoutes from './pc-routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: isMobileTerminal.value ? mobileRoutes : pcRoutes
})

export default router
