import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import './assets/main.css';
library.add(faLinkedin, faGithub, faEnvelope)
const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router);

app.mount('#app');