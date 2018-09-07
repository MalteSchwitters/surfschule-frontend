<template>
    <div>
        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/start/header.jpg"/>

        <nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey-lighter">
            <a href="#hochschulsport" class="text-grey-darker hover:text-blue uppercase no-underline"># Hochschulsport</a>
            <a href="#termine" class="text-grey-darker hover:text-blue uppercase no-underline"># Termine</a>
            <a href="#anmeldung" class="text-grey-darker hover:text-blue uppercase no-underline"># Anmeldung</a>
        </nav>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="hochschulsport" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Hochschulsport</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Du bist grade mitten in deinem Studium und brauchst mal eine Auszeit vom Lernen? Du wolltest schon immer
                mal eine der schönsten Trendsportarten der Welt ausprobieren? Oder in einer kleinen Gruppe die Kanäle
                rund ums Große Meer mit dem SUP erkunden? Dann bist du hier genau richtig! Denn in Kooperation mit dem
                Hochschulsport der HS Emden/Leer bieten wir einige ermäßigte Angebote exklusiv für Studierende an.
            </p>
        </div>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="termine" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Termine</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Die Termine für das Wintersemester 18/19 werden in Kürzebekannt gegeben.
                <!--Hier findest du eine Auflistung aller angebotenen Termine. Für alle Kurse gibt es eine-->
                <!--Mindestteilnehmerzahl von 3 Personen. Bitte achte dazu in den Tagen vor dem Kurs auf deine eMails, da-->
                <!--wir dich so über eventuelle Ausfälle oder wetterbedingte Terminverschiebungen informieren.-->
            </p>
        </div>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="anmeldung" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Anmeldung</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-base xl:text-lg">
                Die Anmeldung wird freigeschaltet, sobald die Kurse verfübar sind.
                <!--Solltest du zum ausgewählten Termin doch keine Zeit haben, oder aus anderen Gründen nicht teilnehmen-->
                <!--können oder wollen, sag uns bitte kurz Bescheid, damit wir den Kurs entsprechend planen können. Eine-->
                <!--kurze email an info@grosses-meer.surf ohne Angabe von Gründen genügt.-->
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class University extends Vue {

    }
</script>
