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

                        <div class="px-8 md:px-16 lg:px-24 py-16 bg-grey-darker">
                            <div class="flex pb-20">
                                <div class="w-1/2 text-sm">
                                    <p class="text-white text-2xl">Unser Angebot</p>
                                    <router-link class="text-white no-underline hover:underline block" to="surfing#kurse">🗸 Windsurf Kurse</router-link>
                                    <router-link class="text-white no-underline hover:underline block" to="surfing#kurse">🗸 Surfmaterial Verleih</router-link>
                                    <router-link class="text-white no-underline hover:underline block" to="surfing#kurse">🗸 SUP Kurse</router-link>
                                    <router-link class="text-white no-underline hover:underline block" to="surfing#kurse">🗸 SUP Verleih</router-link>
                                    <router-link class="text-white no-underline hover:underline block" to="surfing#kurse">🗸 Segelkurse</router-link>
                                    <router-link class="text-white no-underline hover:underline block" to="surfing#kurse">🗸 Segelboot Verleih</router-link>
                                </div>
                                <div class="w-1/2 text-sm">
                                    <p class="text-white text-2xl">Kontakt</p>
                                    <p class="text-grey-light">Surfschule Grosses Meer</p>
                                    <p class="text-grey-light">Forlitzer Str. 213</p>
                                    <p class="text-grey-light">26624 Forlitz-Blaukirchen/ Südbrookmerland</p>
                                    <a class="text-white no-underline hover:underline block" href="tel:049425096">04942 5096</a>
                                    <a class="text-white no-underline hover:underline block" href="tel:01778879184">0177 887 91 84</a>
                                    <a class="text-white no-underline hover:underline block" href="mailto:info@grosses-meer.surf">info@grosses-meer.surf</a>
                                    <router-link class="text-white no-underline hover:underline block" to="surfing#kurse">Impressum</router-link>
                                </div>
                            </div>
                            <p class="text-white text-center">Preise Stand 2018</p>
                            <p class="text-white text-center">Copyright © 2018 Surfschule Grosses Meer</p>
                        </div>
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

        }

        private isMobileDevice() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
        }
    }
</script>

<style src="./styles/main.css"></style>
