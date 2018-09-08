<template>
    <div class="">
        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/sup/header.jpg"/>

        <nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey">
            <a href="#sup" class="text-grey-darker hover:text-blue uppercase no-underline"># Stand Up Paddling</a>
            <a href="#touren" class="text-grey-darker hover:text-blue uppercase no-underline"># Touren</a>
            <a href="#kurse" class="text-grey-darker hover:text-blue uppercase no-underline"># Kurse</a>
            <a href="#verleih" class="text-grey-darker hover:text-blue uppercase no-underline"># Verleih</a>
        </nav>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="sup" class="anchor"></a>
                <h1 class="pt-8 text-2xl xl:text-3xl">Stand Up Paddling</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-base xl:text-lg">
                    Beim Stand Up Paddling, oder kurz SUP, bewegt man sich auf einem Surfbrett stehend mit Hilfe eines
                    Paddels fort. Der bei uns noch relativ neue Trendsport trainiert den Gleichgewichtssinn und viele
                    Muskeln. SUP lässt sich außerdem hervorragend mit Yoga-Übungen kombinieren. Bei uns könnt ihr sowohl
                    die richtige Technik in speziellen SUP Kursen lernen, als auch einfach ein Board leihen und drauf los
                    paddeln!
                </p>
            </div>
        </div>

        <gallery
                :image1="require('../assets/sup/thumbs/sup02.jpg')"
                :image2="require('../assets/sup/thumbs/sup12.jpg')"
                :image3="require('../assets/sup/thumbs/sup13.jpg')">
        </gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="touren" class="anchor"></a>
                <h1 class="pt-8 text-2xl xl:text-3xl">Touren Beispiele</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-base xl:text-lg">
                    Rund um die Surfschule gibt es neben dem Grossen Meer selbst auch ein großes Kanalsystem zu erkunden,
                    welches die Städte Aurich, Emden und Leer verbindet. Für Neulinge bietet es sich an frei über das
                    stehtiefe Grosse Meer zu paddeln. Wer sich dagegen schon ganz wohl auf dem SUP Board fühlt, der kann mit
                    einer Rundtour zum Beispiel alle drei Meere der Region (Grosses Meer, Loppersumer Meer, Kleines Meer)
                    besuchen. Hier haben wir einige unserer Lieblingstouren aufgeführt.
                </p>
                <div class="flex items-start justify-between pb-4 xl:pb-12 -mx-2">
                    <div class="w-1/3 px-2"><img class="w-full rounded shadow-md" src="../assets/sup/route01.jpg"/></div>
                    <div class="w-1/3 px-2"><img class="w-full rounded shadow-md" src="../assets/sup/route02.jpg"/></div>
                    <div class="w-1/3 px-2"><img class="w-full rounded shadow-md" src="../assets/sup/route03.jpg"/></div>
                </div>
                <div class="flex items-start  justify-between pb-12 -mx-2">
                    <div class="w-1/3 px-2"><img class="w-full rounded shadow-md" src="../assets/sup/route04.jpg"/></div>
                    <div class="w-1/3 px-2"><img class="w-full rounded shadow-md" src="../assets/sup/route05.jpg"/></div>
                    <div class="w-1/3 px-2"><img class="w-full rounded shadow-md" src="../assets/sup/route06.jpg"/></div>
                </div>
            </div>
        </div>

        <gallery
                :image1="require('../assets/sup/thumbs/sup02.jpg')"
                :image2="require('../assets/sup/thumbs/sup03.jpg')"
                :image3="require('../assets/sup/thumbs/sup11.jpg')">
        </gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="kurse" class="anchor"></a>
                <h1 class="pt-8 text-2xl xl:text-3xl">SUP Kurse</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-base xl:text-lg">
                    Ihr habt noch nie zuvor auf einem Surfbrett gestanden, oder fühlt euch noch unsicher? Mit einem SUP
                    Einsteigerkurs oder einer geführten Tour über das Grosse Meer und die angrenzenden Kanäle werdet ihr
                    euch schnell an das Board unter euren Füßen gewöhnen und die Faszination dieses Sports erleben. Nach
                    Absprache könnt ihr bei uns auch früh morgens oder spät Abends zum Sonnenuntergang ein ganz besonderes
                    Naturerlebnis erfahren. Bei allen Kursen ist das Material inklusive!
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
        </div>

        <gallery
                :image1="require('../assets/sup/thumbs/sup04.jpg')"
                :image2="require('../assets/sup/thumbs/sup03.jpg')"
                :image3="require('../assets/sup/thumbs/sup06.jpg')">
        </gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="verleih" class="anchor"></a>
                <h1 class="pt-8 text-2xl xl:text-3xl">Verleih</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-base xl:text-lg">
                    Wenn ihr schon öfter mit dem Surfboard unterwegs ward, oder einfach auf eigene Faust losziehen wollt,
                    könnt ihr euch natürlich auch einfach ein Board leihen. Wir haben sowohl mehrere klassische als auch
                    inflatable Air SUPs im Angebot. Eine kurze Einweisung gibt es auf Wunsch gratis dazu!
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
        </div>

        <gallery
                :image1="require('../assets/sup/thumbs/sup05.jpg')"
                :image2="require('../assets/sup/thumbs/sup11.jpg')"
                :image3="require('../assets/sup/thumbs/sup09.jpg')">
        </gallery>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Gallery from '../components/Gallery.vue';

    @Component({ components: { Gallery } })
    export default class StandUpPaddling extends Vue {
        private courses = [
            {
                name: 'Kurze Einweisung',
                duration: '5-10 Min.',
                price: 'GRATIS',
            },
            {
                name: 'Einsteigerkurs',
                duration: '1 Std.',
                price: '20,00€',
            },
            {
                name: 'Geführte Tour',
                duration: 'je Std.',
                price: '20,00€',
            },
        ];

        private renting = [
            {
                material: 'SUP Board mit Paddel',
                duration: '1 Std.',
                price: '12,50€',
            },
            {
                material: 'SUP Board mit Carbon Paddel',
                duration: '1 Std.',
                price: '15,00€',
            },
            {
                material: 'Neoprenanzug',
                duration: '1 Std.',
                price: '2,50€',
            },
        ];
    }
</script>
