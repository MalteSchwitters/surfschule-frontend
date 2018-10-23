<template>
    <div id="app" class="bg-image">
        <navbar></navbar>
        <div class="min-h-screen w-full flex items-stretch justify-center">
            <div class="w-main">
                <div class="h-12 xl:h-24"></div>
                <router-view class="bg-grey-lightest xl:bg-white shadow-md"/>
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<style>
    .bg-image {
        background-image: url('./assets/backgrounds/surfer.jpg');
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Navbar from './components/Navbar.vue';
    import Footer from './components/Footer.vue';

    @Component({
        components: {
            Navbar,
            Footer,
        }
    })

    export default class App extends Vue {
        private created() {
            this.$router.beforeResolve((to, from, next) => {
                window.scrollTo(0, 0);
                next();
            });
        }
    }
</script>

<style src="./styles/main.css"></style>
