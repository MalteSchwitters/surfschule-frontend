<template>
    <div class="">
        <img class="" src="../assets/surfing/header.jpg"/>

        <div class="px-32 py-6">
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
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class Weather extends Vue {

    }
</script>
