import Vue from 'vue';
import App from './App.vue';
import router from './router';
// @ts-ignore
import vuescroll from 'vue-scroll';
Vue.use(vuescroll);
Vue.config.productionTip = false;
Vue.config.devtools = true;
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
//# sourceMappingURL=main.js.map