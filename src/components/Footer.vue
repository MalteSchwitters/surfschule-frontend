<template>
    <div class="px-8 md:px-16 lg:px-24 py-16 bg-grey-darker">
        <div class="flex pb-20">
            <div class="w-1/2 text-sm">
                <p class="text-white text-2xl">Unser Angebot</p>
                <div class="text-white">🗸 <router-link class="text-white no-underline hover:underline" to="surfing#kurse">Windsurf Kurse</router-link></div>
                <div class="text-white">🗸 <router-link class="text-white no-underline hover:underline" to="surfing#verleih">Surfmaterial Verleih</router-link></div>
                <div class="text-white">🗸 <router-link class="text-white no-underline hover:underline" to="sup#kurse">SUP Kurse</router-link></div>
                <div class="text-white">🗸 <router-link class="text-white no-underline hover:underline" to="sup#verleih">SUP Verleih</router-link></div>
                <div class="text-white">🗸 <router-link class="text-white no-underline hover:underline" to="sup#touren">Geführte SUP Touren</router-link></div>
                <div class="text-white">🗸 <router-link class="text-white no-underline hover:underline" to="sailing#kurse">Segelkurse</router-link></div>
                <div class="text-white">🗸 <router-link class="text-white no-underline hover:underline" to="sailing#verleih">Segelboot Verleih</router-link></div>
            </div>
            <div class="w-1/2 text-sm">
                <p class="text-white text-2xl">Kontakt</p>
                <p class="text-grey-light">Surfschule Grosses Meer</p>
                <p class="text-grey-light">Forlitzer Str. 213</p>
                <p class="text-grey-light">26624 Forlitz-Blaukirchen/ Südbrookmerland</p>
                <a class="text-white no-underline hover:underline block" href="tel:049425096">04942 5096</a>
                <a class="text-white no-underline hover:underline block" href="tel:01778879184">0177 887 91 84</a>
                <a class="text-white no-underline hover:underline block" href="mailto:info@grosses-meer.surf">info@grosses-meer.surf</a>
                <router-link class="text-white no-underline hover:underline block" to="impressum">Impressum</router-link>
            </div>
        </div>
        <p class="text-white text-center">Preise Stand 2018</p>
        <p class="text-white text-center">Copyright © 2018 Surfschule Grosses Meer</p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';

    @Component({
        name: "Footer"
    })
    export default class Footer extends Vue {

    }
</script>
