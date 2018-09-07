<template>
    <div class="">

        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/surfing/header.jpg"/>

        <nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey-lighter">
            <a href="#windsurfen" class="text-grey-darker hover:text-blue uppercase no-underline"># Windsurfen</a>
            <a href="#kurse" class="text-grey-darker hover:text-blue uppercase no-underline"># Kurse</a>
            <a href="#verleih" class="text-grey-darker hover:text-blue uppercase no-underline"># Verleih</a>
            <a href="#ranking" class="text-grey-darker hover:text-blue uppercase no-underline"># GPS Rangliste</a>
        </nav>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="windsurfen" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Windsurfen</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Das Grosse Meer ist auf seiner gesamten Fläche stehtief und bietet somit ideale Bedingungen für
                Einsteiger und Fortgeschrittene. Egal, ob ihr schon häufiger gesurft habt oder gerade einen Anfängerkurs
                machen wollt: Wir haben das richtige Angebot an Kursen und passende Material für euch im Verleih.
            </p>
            <p class="pb-6 text-base xl:text-lg">
                Natürlich könnt ihr auch mit eurem eigenen Material auf dem Grossen Meer surfen gehen. Aufbauen könnt
                ihr am Strand oben beim Meerwarthaus, bei der Paddel und Pedal Station, bei uns an der Surfschule oder
                auf der südlichen Landzunge. Am Grossen Meer kann man bei allen Bedingungen surfen gehen. Egal welche
                Windrichtung. Egal ob Ebbe oder Flut. Wir haben 24h Hochwasser!
            </p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen02.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen15.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen06.jpg"/>
        </div>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="kurse" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Surfkurse</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Wir bieten Surfkurse für alle Könnensstufen: Vom Einsteigerkurs mit abschließendem VDWS Grundschein bis
                zur Privatstunde mit gezieltem Intensiv-Training. Bei allen Surfkursen wird das Unterrichts- und
                Surfmaterial, d.h. auch der Surfanzug, natürlich zur Verfügung gestellt. Natürlich könnt ihr auch euer
                eigenes Material zu den Kursen mitbringen. Sprecht uns dazu einfach vor dem Kurs kurz an. Alles was ihr
                zum Surfen mitbringen solltet ist Gute Laune ;-)
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
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen05.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen04.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen16.jpg"/>
        </div>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="verleih" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Verleih</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Natürlich haben wir auch eine große Auswahl an Surfmaterial im Verleih. Von einsteigerfreundlichen
                Longboards über Aufsteigerboards bis hin zu schnellen Shortboards und Profilsegeln bieten wir alles zum
                Verleih an, was das Surferherz begehrt!
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
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen20.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen01.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen21.jpg"/>
        </div>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="ranking" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">GPS Rangliste</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Ihr wolltet schon immer mal wissen, wie schnell ihr auf dem Wasser unterwegs seid? Mit dem GPS - Gerät
                der Surfschule könnt ihr euren Topspeed messen! Holt alles aus euren Boards raus, schon für 5€ / Std.
                geht der Speed-Spass los! Hier die Rangliste der aktuell Schnellsten auf dem Grossen Meer:
            </p>
            <table class="w-full">
                <tr>
                    <th class="pr-2">#</th>
                    <th class="w-3/5 whitespace-no-wrap uppercase">Fahrer</th>
                    <th class="w-2/5 whitespace-no-wrap uppercase">Top Speed</th>
                    <th class="w-1/5 whitespace-no-wrap uppercase">Datum</th>
                </tr>
                <tr v-for="(r, index) in ranking" :key="r.driver">
                    <td class="text-base xl:text-lg">{{ index + 1 }}</td>
                    <td class="text-base xl:text-lg">{{ r.driver }}</td>
                    <td class="text-base xl:text-lg">{{ r.speed }}</td>
                    <td class="text-base xl:text-lg">{{ r.date }}</td>
                </tr>
            </table>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen08.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen03.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen07.jpg"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class Surfing extends Vue {
        private courses = [
            {
                name: 'Schnuppersurfen (ab 8 Personen)',
                duration: '1 Std.',
                price: '20,00€',
            },
            {
                name: 'Schnupperkurs',
                duration: '3 Std.',
                price: '55,00€',
            },
            {
                name: 'Einsteigerkurs ohne VDWS-Grundschein',
                duration: '12-14 Std.',
                price: '195,00€',
            },
            {
                name: 'Einsteigerkurs mit VDWS-Grundschein',
                duration: '12-14 Std.',
                price: '225,00€',
            },
            {
                name: 'Aufbaukurs (2-4 Personen)',
                duration: '3 Std.',
                price: '95,00€',
            },
            {
                name: 'Privatstunde',
                duration: '1 Std.',
                price: '75,00€',
            },
        ];

        private renting = [
            {
                material: 'Einsteigerboard mit Segel',
                duration: '1 Std.',
                price: '15,00€',
            },
            {
                material: 'Aufsteigerboard mit Segel',
                duration: '1 Std.',
                price: '20,00€',
            },
            {
                material: 'Shortboard mit Profilsegel',
                duration: '1 Std.',
                price: '22,50 €',
            },
            {
                material: 'Neoprenanzug',
                duration: '1 Std.',
                price: '2,50€',
            },
        ];

        private ranking = [
            {
                driver: 'Timo Thiele',
                speed: '62,2 km/h',
                date: '04.08.2017',
            },
            {
                driver: 'Jan-Malte Becker',
                speed: '45,3 km/h',
                date: '10.09.2017',
            },
            {
                driver: 'Malte Schwitters',
                speed: '45,2 km/h',
                date: '10.09.2017',
            },
            {
                driver: 'Lasse Eckmann',
                speed: '42,1 km/h',
                date: '07.02.2017',
            },
            {
                driver: 'Nika Eckmann',
                speed: '40,6 km/h',
                date: '07.02.2017',
            },
        ];
    }
</script>
