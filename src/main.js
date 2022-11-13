import { createApp } from 'vue'
import '@/style/style.scss'
import App from './App.vue'
import router from '@/router'
import Comp from '@/components/index'

import 'virtual:svg-icons-register';

createApp(App).use(router).use(Comp).mount('#app')
