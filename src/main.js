import { createApp } from 'vue';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as bootstrap from 'bootstrap'
library.add(faStar,faBars);
// ------
// Import SCSS
import './assets/scss/main.scss';
// -----

import App from './App.vue'
createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
