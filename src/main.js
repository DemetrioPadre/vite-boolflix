

import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';

// new Vue({
//     render: h => h(App),
//     router
// }).$mount('#app');

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faStar as faStarFull } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

library.add(faStarFull, faStarEmpty);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

createApp(App).mount('#app');
