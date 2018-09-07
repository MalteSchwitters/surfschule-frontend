import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map