<template>
    <div class="">
        <img class="" src="../assets/kontakt/header.jpg"/>

        <nav class="px-24 py-6 -mt-2 flex justify-around bg-grey-lighter">
            <a href="#kontakt" class="text-grey-darker hover:text-blue uppercase no-underline"># Kontakt</a>
            <a href="#anfahrt" class="text-grey-darker hover:text-blue uppercase no-underline"># Anfahrt</a>
            <a href="#parken" class="text-grey-darker hover:text-blue uppercase no-underline"># Parkmöglichkeiten</a>
        </nav>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <a id="kontakt" class="anchor"></a>
            <h1 class="pt-8">Kontakt</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p>
                Moin, mein Name ist Jens Radde. Vor mehr als 30 Jahren habe ich mein Hobby zum Beruf gemacht. Als
                Surflehrer leite ich seitdem erfolgreich die Surf- und Segelschule am Großen Meer. Seit mehr als 20
                Jahren schule und prüfe ich als Ausbilder im Verband Deutscher Windsurfingschulen e.V. (VDWS) auch
                Surflehrer und Surflehrerteams. Mitgliedsschulen des VDWS stehen für qualifizierte Instruktoren,
                Schulungsmaterial, das an die unterschiedlichsten Bedürfnisse angepasst ist und modernste Methodik.
                Auch in unserer Schule garantieren wir dafür.
            </p>
            <div class="flex">
                <div class="w-1/4 text-center">
                    <p>Surfschule Großes Meer</p>
                    <p>Am Meer 2</p>
                    <p>26624 Südbrookmerland</p>
                </div>
                <div class="w-1/4">
                    <a class="no-underline hover:underline block" href="tel:049425096">04942 5096</a>
                </div>
                <div class="w-1/4">
                    <a class="no-underline hover:underline block" href="tel:01778879184">0177 887 91 84</a>
                </div>
                <div class="w-1/4">
                    <a class="no-underline hover:underline block" href="mailto:info@grosses-meer.surf">info@grosses-meer.surf</a>
                </div>
            </div>
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
    export default class Contact extends Vue {

    }
</script>
