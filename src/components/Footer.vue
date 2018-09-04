<template>
    <div class="px-8 md:px-16 lg:px-24 py-16 bg-grey-darker">
        <div class="flex flex-col xl:flex-row pb-6">
            <div class="w-full flex-grow pb-6">
                <p class="text-white text-lg xl:text-2xl">Unser Angebot</p>
                <div class="text-white flex items-center">
                    <img class="table-cell h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/checkmark.png"/>
                    <router-link class="text-white text-base xl:text-lg no-underline hover:underline" to="surfing#kurse">Windsurf Kurse</router-link>
                </div>
                <div class="text-white flex items-center">
                    <img class="table-cell h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/checkmark.png"/>
                    <router-link class="text-white text-base xl:text-lg no-underline hover:underline" to="surfing#verleih">Surfmaterial Verleih</router-link>
                </div>
                <div class="text-white flex items-center">
                    <img class="table-cell h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/checkmark.png"/>
                    <router-link class="text-white text-base xl:text-lg no-underline hover:underline" to="sup#kurse">SUP Kurse</router-link>
                </div>
                <div class="text-white flex items-center">
                    <img class="table-cell h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/checkmark.png"/>
                    <router-link class="text-white text-base xl:text-lg no-underline hover:underline" to="sup#verleih">SUP Verleih</router-link>
                </div>
                <div class="text-white flex items-center">
                    <img class="table-cell h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/checkmark.png"/>
                    <router-link class="text-white text-base xl:text-lg no-underline hover:underline" to="sup#touren">Geführte SUP Touren</router-link>
                </div>
                <div class="text-white flex items-center">
                    <img class="table-cell h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/checkmark.png"/>
                    <router-link class="text-white text-base xl:text-lg no-underline hover:underline" to="sailing#kurse">Segelkurse</router-link>
                </div>
                <div class="text-white flex items-center">
                    <img class="table-cell h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/checkmark.png"/>
                    <router-link class="text-white text-base xl:text-lg no-underline hover:underline" to="sailing#verleih">Segelboot Verleih</router-link>
                </div>
            </div>
            <div class="w-full flex-grow pb-6">
                <p class="text-white text-lg xl:text-2xl">Kontakt</p>
                <div class="text-white">
                    <p class="text-grey-light text-base xl:text-lg">Surfschule Grosses Meer</p>
                    <p class="text-grey-light text-base xl:text-lg">Forlitzer Str. 213</p>
                    <p class="text-grey-light text-base xl:text-lg">26624 Forlitz-Blaukirchen/ Südbrookmerland</p>
                </div>
                <div class="text-white flex items-center">
                    <img class="h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/home.png"/>
                    <a class="text-base xl:text-lg text-white no-underline hover:underline" href="tel:049425096">04942 5096</a>
                </div>
                <div class="text-white flex items-center">
                    <img class="h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/phone.png"/>
                    <a class="text-base xl:text-lg text-white no-underline hover:underline" href="tel:01778879184">0177 887 91 84</a>
                </div>
                <div class="text-white flex items-center">
                    <img class="h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/new-post.png"/>
                    <a class="text-base xl:text-lg text-white no-underline hover:underline" href="mailto:info@grosses-meer.surf">info@grosses-meer.surf</a>
                </div>
                <div class="text-white flex items-center">
                    <img class="h-4 pr-4" src="https://png.icons8.com/ios/32/ffffff/section.png"/>
                    <router-link class="text-base xl:text-lg text-white no-underline hover:underline block" to="impressum">Impressum</router-link>
                </div>
            </div>
        </div>
        <p class="text-base xl:text-lg text-white text-center">Preise Stand {{ (new Date()).getFullYear() }}</p>
        <p class="text-base xl:text-lg text-white text-center">Copyright © {{ (new Date()).getFullYear() }} Surfschule Grosses Meer</p>
        <div class="text-center">
            <a class="text-base xl:text-lg text-white no-underline hover:underline" href="https://icons8.com">Icon pack by Icons8.com</a>
        </div>
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
