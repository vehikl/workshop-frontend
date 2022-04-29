import {createApp} from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import {TrashIcon} from '@heroicons/vue/solid'

createApp(App)
    .component('trash-icon', TrashIcon)
    .mount('#app')
