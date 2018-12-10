import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
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
            component: () => import(/* webpackChunkName: "impressum" */ './views/Impressum.vue'),
        },
        {
            path: '/hochschulsport',
            name: 'hochschulsport',
            component: () => import(/* webpackChunkName: "university" */ './views/University.vue'),
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import(/* webpackChunkName: "admin" */ './views/AdminSpeedRanking.vue'),
        },
        {
            path: '/surfing',
            name: 'surfing',
            component: () => import(/* webpackChunkName: "surfing" */ './views/Surfing.vue'),
            alias: ['/surfen', '/surf', '/windsurfen'],
        },
        {
            path: '/sup',
            name: 'sup',
            component: () => import(/* webpackChunkName: "sup" */ './views/StandUpPaddling.vue'),
            alias: ['/standuppaddling', '/stand-up-paddling'],
        },
        {
            path: '/sailing',
            name: 'sailing',
            component: () => import(/* webpackChunkName: "sailing" */ './views/Sailing.vue'),
            alias: ['/segeln', '/sail'],
        },
        {
            path: '/weather',
            name: 'weather',
            component: () => import(/* webpackChunkName: "weather" */ './views/Weather.vue'),
            alias: ['/wetter'],
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import(/* webpackChunkName: "contact" */ './views/Contact.vue'),
            alias: ['/kontakt'],
        },
        {
            path: "*",
            component: Home,
        },
    ],
});
//# sourceMappingURL=router.js.map