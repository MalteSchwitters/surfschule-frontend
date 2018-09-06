<template>
    <div class="">
        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/sailing/header.jpg"/>

        <nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey-lighter">
            <a href="#segeln" class="text-grey-darker hover:text-blue uppercase no-underline"># Segeln</a>
            <a href="#kurse" class="text-grey-darker hover:text-blue uppercase no-underline"># Kurse</a>
            <a href="#verleih" class="text-grey-darker hover:text-blue uppercase no-underline"># Verleih</a>
        </nav>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="segeln" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Segeln</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Bock auf Segeln? Ganz einfach bei uns am Grossen Meer! Wir bieten euch die Möglichkeit ganz entspannt
                das Gefühl des Segelns bei unseren Kursen zu erlernen. Auch wenn es mal Schwierigkeiten gibt, kein
                Problem: Die maximale Tiefe des Grossen Meeres von ca. 1m geben euch immer die nötige Sicherheit alles
                unter Kontrolle zu behalten.
            </p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln01.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln04.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln03.jpg"/>
        </div>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="kurse" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Segelkurse</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Praktisch und theoretisch alles klar? Wir geben euch die nötige Sicherheit auf dem Wasser und machen
                Theorie verständlich. Mit dem Segelschein des VDWS wird die Berechtigung zum Führen eines Segelbootes
                erlangt. Auf Wunsch bieten wir auch den DSV-Sportbootführerschein "Binnen" an.
            </p>
            <table class="w-full">
                <tr>
                    <th class="w-3/5 whitespace-no-wrap uppercase">Kurs</th>
                    <th class="w-1/4 whitespace-no-wrap uppercase">Dauer</th>
                    <th class="w-1/5 whitespace-no-wrap uppercase">Preis *</th>
                </tr>
                <tr v-for="c in courses" :key="c.name">
                    <td class="text-base xl:text-lg">{{ c.name }}</td>
                    <td class="text-base xl:text-lg whitespace-no-wrap pr-2">{{ c.duration }}</td>
                    <td class="text-base xl:text-2xl whitespace-no-wrap">{{ c.price }}</td>
                </tr>
            </table>
            <p class="pt-8 pb-4 text-base xl:text-lg" align="right">* alle Kurspreise pro Person und inkl. Material</p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln06.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln05.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln02.jpg"/>
        </div>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="verleih" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Verleih</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
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
                    <td class="text-base xl:text-lg">{{ r.material }}</td>
                    <td class="text-base xl:text-lg whitespace-no-wrap pr-2">{{ r.duration }}</td>
                    <td class="text-base xl:text-2xl whitespace-no-wrap">{{ r.price }}</td>
                </tr>
            </table>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln08.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln09.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln10.jpg"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class Sailing extends Vue {

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
