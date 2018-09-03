<template>
    <div id="app" class="">
        <div>
            <navbar class="fixed w-full z-10 shadow-md"></navbar>
            <div class="min-h-screen flex flex-col bg-transparent">
                <div class="h-24"></div>
                <img class="h-screen w-screen fixed z-0" src="./assets/backgrounds/sup.jpg"/>
                <div class="z-10 flex-1 w-full flex items-stretch">
                    <div class="xl:w-1/5"></div>

                    <div class="flex-grow flex-1 ">
                        <router-view class="bg-white shadow-md"/>
                        <Footer></Footer>
                    </div>

                    <div class="xl:w-1/5"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
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

        private isMobileDevice() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        }
    }
</script>

<style src="./styles/main.css"></style>
