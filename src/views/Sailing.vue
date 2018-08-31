<template>
    <div class="">
        <img class="" src="../assets/sailing/header.jpg"/>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <h1 class="pt-8">Segeln</h1>
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
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln01.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln04.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln03.jpg"/>
        </div>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <h1 class="pt-8">Segelkurse</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6">
                Praktisch und theoretisch alles klar? Wir geben euch die nötige Sicherheit auf dem Wasser und machen
                Theorie verständlich. Mit dem Segelschein des VDWS wird die Berechtigung zum Führen eines Segelbootes
                erlangt. Auf Wunsch bieten wir auch den DSV-Sportbootführerschein "Binnen" an.
            </p>
            <table class="w-full">
                <tr>
                    <th class="w-3/5">Kurs</th>
                    <th class="w-1/4">Dauer</th>
                    <th class="w-1/5">Preis</th>
                </tr>
                <tr>
                    <td>Schnuppersegeln (1 Person)</td>
                    <td>2 Stunden</td>
                    <td class="text-2xl">95,00€</td>
                </tr>
                <tr>
                    <td>Schnuppersegeln (ab 2 Person)</td>
                    <td>2 Stunden</td>
                    <td class="text-2xl">65,00€</td>
                </tr>
                <tr>
                    <td>Segelkurs</td>
                    <td>12 Stunden</td>
                    <td class="text-2xl">280,00€</td>
                </tr>
                <tr>
                    <td>Segelkurs mit VDWS Jollenschein</td>
                    <td>15 Stunden</td>
                    <td class="text-2xl">320,00€</td>
                </tr>
            </table>
            <p align="right">* alle Kurspreise pro Person und inkl. Material</p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln06.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln05.jpg"/>
            <img class="w-1/3" src="../assets/sailing/thumbs/segeln02.jpg"/>
        </div>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <h1 class="pt-8">Verleih</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6">
                Jederzeit könnt ihr bei uns eine Jolle mieten. Vorrausgesetzt ihr habt die Qualifikation zum Führen
                einer Segeljolle. Am besten meldet ihr euch vorher kurz telefonisch an.
            </p>
            <table class="w-full">
                <tr>
                    <th class="w-3/5">Material</th>
                    <th class="w-1/4">Dauer</th>
                    <th class="w-1/5">Preis</th>
                </tr>
                <tr>
                    <td>Jolle</td>
                    <td>1 Stunde</td>
                    <td class="text-2xl">35,00€</td>
                </tr>
                <tr>
                    <td>Auf- und Abtakeln</td>
                    <td></td>
                    <td class="text-2xl">5,00€</td>
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

    }
</script>
