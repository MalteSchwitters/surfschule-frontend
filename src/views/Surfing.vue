<template>
    <div class="">

        <img class="" src="../assets/surfing/header.jpg"/>

        <div class="px-24 py-2 bg-grey flex justify-around">
            <a href="#" class="no-underline">Test 1</a>
            <a href="#" class="no-underline">Test 2</a>
            <a href="#" class="no-underline">Test 3</a>
        </div>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <h1 class="pt-8">Windsurfen</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6">
                Das Grosse Meer ist auf seiner gesamten Fläche stehtief und bietet somit ideale Bedingungen für
                Einsteiger und Fortgeschrittene. Egal, ob ihr schon häufiger gesurft habt oder gerade einen Anfängerkurs
                machen wollt: Wir haben das richtige Angebot an Kursen und passende Material für euch im Verleih.
            </p>
            <p class="pb-6">
                Natürlich könnt ihr auch mit eurem eigenen Material auf dem Grossen Meer surfen gehen. Aufbauen könnt
                ihr am Strand oben beim Meerwarthaus, bei der Paddel und Pedal Station, bei uns an der Surfschule oder
                auf der südlichen Landzunge. Am Grossen Meer kann man bei allen Bedingungen surfen gehen. Egal welche
                Windrichtung. Egal ob Ebbe oder Flut. Wir haben 24h Hochwasser!
            </p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen01.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen02.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen03.jpg"/>
        </div>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <h1 class="pt-8">Surfkurse</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6">
                Wir bieten Surfkurse für alle Könnensstufen: Vom Einsteigerkurs mit abschließendem VDWS Grundschein bis
                zur Privatstunde mit gezieltem Intensiv-Training. Bei allen Surfkursen wird das Unterrichts- und
                Surfmaterial, d.h. auch der Surfanzug, natürlich zur Verfügung gestellt. Natürlich könnt ihr auch euer
                eigenes Material zu den Kursen mitbringen. Sprecht uns dazu einfach vor dem Kurs kurz an. Alles was ihr
                zum Surfen mitbringen solltet ist Gute Laune ;-)
            </p>
            <table class="w-full">
                <tr>
                    <th>KURS</th>
                    <th>DAUER</th>
                    <th>PREIS</th>
                </tr>
                <tr>
                    <td>Schnuppersurfen (ab 8 Personen)</td>
                    <td>1 Stunde</td>
                    <td class="text-2xl">20,00€</td>
                </tr>
                <tr>
                    <td>Schnupperkurs</td>
                    <td>3 Stunden</td>
                    <td class="text-2xl">55,00€</td>
                </tr>
                <tr>
                    <td>Einsteigerkurs ohne VDWS-Grundschein</td>
                    <td>12-14 Stunden</td>
                    <td class="text-2xl">195,00€</td>
                </tr>
                <tr>
                    <td>Einsteigerkurs mit VDWS-Grundschein</td>
                    <td>12-14 Stunden</td>
                    <td class="text-2xl">225,00€</td>
                </tr>
                <tr>
                    <td>Aufbaukurs (2 - 4 Personen)</td>
                    <td>3 Stunden</td>
                    <td class="text-2xl">95,00€</td>
                </tr>
                <tr>
                    <td>Privatstunde</td>
                    <td>1 Stunden</td>
                    <td class="text-2xl">75,00€</td>
                </tr>
            </table>

        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen01.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen02.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen03.jpg"/>
        </div>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <h1 class="pt-8">Verleih</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6">
                Natürlich haben wir auch eine große Auswahl an Surfmaterial im Verleih. Von einsteigerfreundlichen
                Longboards über Aufsteigerboards bis hin zu schnellen Shortboards und Profilsegeln bieten wir alles zum
                Verleih an, was das Surferherz begehrt!
            </p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen01.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen02.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen03.jpg"/>
        </div>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <h1 class="pt-8">GPS Rangliste</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6">
                Ihr wolltet schon immer mal wissen, wie schnell ihr auf dem Wasser unterwegs seid? Mit dem GPS - Gerät
                der Surfschule könnt ihr euren Topspeed messen! Holt alles aus euren Boards raus, schon für 5€ / Std.
                geht der Speed-Spass los! Hier die Rangliste der aktuell Schnellsten auf dem Grossen Meer:
            </p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen01.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen02.jpg"/>
            <img class="w-1/3" src="../assets/surfing/thumbs/surfen03.jpg"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class Surfing extends Vue {

    }
</script>
