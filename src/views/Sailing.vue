<template>
    <div class="">
        <img class="w-full h-64 md:h-96 object-fit-cover" src="../assets/sailing/header.jpg"/>

        <!--<nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey">-->
        <!--<a href="#segeln" class="text-grey-darker hover:text-blue uppercase no-underline"># Segeln</a>-->
        <!--<a href="#kurse" class="text-grey-darker hover:text-blue uppercase no-underline"># Kurse</a>-->
        <!--<a href="#verleih" class="text-grey-darker hover:text-blue uppercase no-underline"># Verleih</a>-->
        <!--</nav>-->

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="segeln" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Segeln</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Bock auf Segeln? Ganz einfach bei uns am Grossen Meer! Wir bieten euch die Möglichkeit ganz
                    entspannt
                    das Gefühl des Segelns bei unseren Kursen zu erlernen. Auch wenn es mal Schwierigkeiten gibt, kein
                    Problem: Die maximale Tiefe des Grossen Meeres von ca. 1m geben euch immer die nötige Sicherheit
                    alles
                    unter Kontrolle zu behalten.
                </p>
            </div>
        </div>

        <gallery :images="gallery_sailing"></gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="kurse" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Segelkurse</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Praktisch und theoretisch alles klar? Wir geben euch die nötige Sicherheit auf dem Wasser und machen
                    Theorie verständlich. Mit dem Segelschein des VDWS wird die Berechtigung zum Führen eines
                    Segelbootes
                    erlangt. Auf Wunsch bieten wir auch den DSV-Sportbootführerschein "Binnen" an.
                </p>
                <table class="w-full">
                    <tr>
                        <th class="w-3/5 whitespace-no-wrap uppercase">Kurs</th>
                        <th class="w-1/4 whitespace-no-wrap uppercase">Dauer</th>
                        <th class="w-1/5 whitespace-no-wrap uppercase">Preis *</th>
                    </tr>
                    <tr v-for="c in courses" :key="c.name">
                        <td class="text-sm sm:text-base xl:text-lg">{{ c.name }}</td>
                        <td class="text-sm sm:text-base xl:text-lg whitespace-no-wrap pr-2">{{ c.duration }}</td>
                        <td class="text-sm sm:text-base xl:text-2xl whitespace-no-wrap">{{ c.price }}</td>
                    </tr>
                </table>
                <p class="pt-8 pb-4 text-sm sm:text-base xl:text-lg" align="right">
                    * Preise pro Person und inkl. Material
                </p>
            </div>
        </div>

        <gallery :images="gallery_courses"></gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="verleih" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Verleih</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Jederzeit könnt ihr bei uns eine Jolle mieten. Vorrausgesetzt ihr habt die Qualifikation zum Führen
                    einer Segeljolle. Am besten meldet ihr euch vorher kurz telefonisch an.
                </p>
                <table class="w-full">
                    <tr>
                        <th class="w-3/5 whitespace-no-wrap uppercase">Material</th>
                        <th class="w-1/4 whitespace-no-wrap uppercase">Dauer</th>
                        <th class="w-1/5 whitespace-no-wrap uppercase">Preis</th>
                    </tr>
                    <tr v-for="r in renting" :key="r.material">
                        <td class="text-sm sm:text-base xl:text-lg">{{ r.material }}</td>
                        <td class="text-sm sm:text-base xl:text-lg whitespace-no-wrap pr-2">{{ r.duration }}</td>
                        <td class="text-sm sm:text-base xl:text-2xl whitespace-no-wrap">{{ r.price }}</td>
                    </tr>
                </table>
            </div>
        </div>

        <gallery :images="gallery_rent"></gallery>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Gallery from '../components/Gallery.vue';

    @Component({components: {Gallery}})
    export default class Sailing extends Vue {

        private gallery_sailing = [{
            image: require('../assets/sailing/segeln01.jpg'),
            thumbnail: require('../assets/sailing/segeln01_thumb.jpg'),
        }, {
            image: require('../assets/sailing/segeln04.jpg'),
            thumbnail: require('../assets/sailing/segeln04_thumb.jpg'),
        }, {
            image: require('../assets/sailing/segeln03.jpg'),
            thumbnail: require('../assets/sailing/segeln03_thumb.jpg'),
        }];

        private gallery_courses = [{
            image: require('../assets/sailing/segeln06.jpg'),
            thumbnail: require('../assets/sailing/segeln06_thumb.jpg'),
        }, {
            image: require('../assets/sailing/segeln05.jpg'),
            thumbnail: require('../assets/sailing/segeln05_thumb.jpg'),
        }, {
            image: require('../assets/sailing/segeln02.jpg'),
            thumbnail: require('../assets/sailing/segeln02_thumb.jpg'),
        }];

        private gallery_rent = [{
            image: require('../assets/sailing/segeln08.jpg'),
            thumbnail: require('../assets/sailing/segeln08_thumb.jpg'),
        }, {
            image: require('../assets/sailing/segeln09.jpg'),
            thumbnail: require('../assets/sailing/segeln09_thumb.jpg'),
        }, {
            image: require('../assets/sailing/segeln10.jpg'),
            thumbnail: require('../assets/sailing/segeln10_thumb.jpg'),
        }];

        private courses = [
            {
                name: 'Schnuppersegeln (1 Person)',
                duration: '2 Std.',
                price: '95,00€',
            },
            {
                name: 'Schnuppersegeln (ab 2 Person)',
                duration: '2 Std.',
                price: '65,00€',
            },
            {
                name: 'Segelkurs',
                duration: '12 Std.',
                price: '280,00€',
            },
            {
                name: 'Segelkurs mit VDWS-Jollenschein',
                duration: '15 Std.',
                price: '320,00€',
            },
        ];

        private renting = [
            {
                material: 'Jolle',
                duration: '1 Std.',
                price: '35,00€',
            },
            {
                material: 'Auf- und Abtakeln',
                duration: '',
                price: '5,00€',
            },
        ];
    }
</script>
