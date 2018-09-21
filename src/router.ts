import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Surfing from './views/Surfing.vue';
import StandUpPaddling from './views/StandUpPaddling.vue';
import Sailing from './views/Sailing.vue';
import Weather from './views/Weather.vue';
import Contact from './views/Contact.vue';
import Impressum from './views/Impressum.vue';
import University from './views/University.vue';
import AdminSpeedRanking from './views/AdminSpeedRanking.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            alias: ['/home', '/start', '/startseite', '/willkommen'],
        },
        {
            path: '/impressum',
            name: 'impressum',
            component: Impressum,
        },
        {
            path: '/hochschulsport',
            name: 'hochschulsport',
            component: University,
        },
        {
            path: '/admin',
            name: 'admin',
            component: AdminSpeedRanking,
        },
        {
            path: '/surfing',
            name: 'surfing',
            component: Surfing,
            alias: ['/surfen', '/surf', '/windsurfen'],
        },
        {
            path: '/sup',
            name: 'sup',
            component: StandUpPaddling,
            alias: ['/standuppaddling', '/stand-up-paddling'],
        },
        {
            path: '/sailing',
            name: 'sailing',
            component: Sailing,
            alias: ['/segeln', '/sail'],
        },
        {
            path: '/weather',
            name: 'weather',
            component: Weather,
            alias: ['/wetter'],
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            alias: ['/kontakt'],
        },
        {
            path: "*",
            component: Home,
        },
    ],
});
