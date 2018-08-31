import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Surfing from './views/Surfing.vue';
import StandUpPaddling from './views/StandUpPaddling.vue';
import Sailing from './views/Sailing.vue';
import Weather from './views/Weather.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/surfing',
            name: 'surfing',
            component: Surfing,
        },
        {
            path: '/sup',
            name: 'sup',
            component: StandUpPaddling,
        },
        {
            path: '/sailing',
            name: 'sailing',
            component: Sailing,
        },
        {
            path: '/weather',
            name: 'weather',
            component: Weather,
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
        },
    ],
});
