<template>
    <nav class="h-24 flex justify-center items-center bg-white z-20 text-grey-dark text-lg uppercase font-sans font-thin ">
        <div class="w-1/3 flex justify-end  pt-4">
            <router-link to="home" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                :class="{ 'text-grey-darkest border-green-dark': $router.currentRoute.path.startsWith('/home') }">
                Startseite
            </router-link>
            <router-link to="surfing" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': $router.currentRoute.path.startsWith('/surfing') }">
                Windsurfen
            </router-link>
            <router-link to="sup" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': $router.currentRoute.path.startsWith('/sup') }">
                Stand Up Paddling
            </router-link>
        </div>
        <router-link to="/" class="flex-no-shrink">
            <img src="../assets/logo.png" class="h-16 px-8 my-auto">
        </router-link>
        <div class="w-1/3 flex justify-start pt-4">
            <router-link to="sailing" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': $router.currentRoute.path.startsWith('/sailing') }">
                Segeln
            </router-link>
            <router-link to="weather" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': $router.currentRoute.path.startsWith('/weather') }">
                Wetter
            </router-link>
            <router-link to="contact" class="p-4 text-grey-dark no-underline border-b-2 hover:border-green-dark hover:text-grey-darker"
                 :class="{ 'text-grey-darkest border-green-dark': $router.currentRoute.path.startsWith('/contact') }">
                Kontakt & Anfahrt
            </router-link>
        </div>
    </nav>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        name: "Navbar"
    })
    export default class Navbar extends Vue {

        private async created() {

        }
     }
</script>
