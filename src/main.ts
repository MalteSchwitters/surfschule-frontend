import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import vuescroll from 'vue-scroll';
// let vuescroll = require('vue-scroll');

Vue.use(vuescroll);

Vue.config.productionTip = false;

Vue.config.devtools = true;


new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
