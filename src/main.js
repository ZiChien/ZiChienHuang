import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
