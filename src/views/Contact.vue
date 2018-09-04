<template>
    <div class="">
        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/contact/header.jpg"/>

        <nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey-lighter">
            <a href="#kontakt" class="text-grey-darker hover:text-blue uppercase no-underline"># Kontakt</a>
            <a href="#anfahrt" class="text-grey-darker hover:text-blue uppercase no-underline"># Anfahrt</a>
            <a href="#parken" class="text-grey-darker hover:text-blue uppercase no-underline"># Parkmöglichkeiten</a>
        </nav>

        <div class="px-6 md:px-16 lg:px-24 py-6">
            <a id="kontakt" class="anchor"></a>
            <h1 class="pt-8">Kontakt</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <div class="flex pb-4">
                <img class="rounded-full w-24 h-24 mr-4" src="../assets/contact/jens.jpg"/>
                <div class="pr-8 pt-4">
                    <h2>Jens Radde</h2>
                    <p>Inhaber, Surf- und Segellehrer</p>
                </div>
                <!--<img class="rounded-full w-24 h-24 mr-4" src="../assets/contact/malte.jpg"/>-->
                <!--<img class="rounded-full w-24 h-24 mr-4" src="../assets/contact/lasse.jpg"/>-->
            </div>
            <p class="pb-12">
                Moin, mein Name ist Jens Radde. Vor mehr als 30 Jahren habe ich mein Hobby zum Beruf gemacht. Als
                Surflehrer leite ich seitdem erfolgreich die Surf- und Segelschule am Großen Meer. Seit mehr als 20
                Jahren schule und prüfe ich als Ausbilder im Verband Deutscher Windsurfingschulen e.V. (VDWS) auch
                Surflehrer und Surflehrerteams. Mitgliedsschulen des VDWS stehen für qualifizierte Instruktoren,
                Schulungsmaterial, das an die unterschiedlichsten Bedürfnisse angepasst ist und modernste Methodik.
                Auch in unserer Schule garantieren wir dafür.
            </p>
            <div class="flex flex-col xl:flex-row text-center">
                <div class="w-1/4 flex items-center">
                    <img class="pb-2" src="https://png.icons8.com/ios/48/444444/marker.png"/>
                    <div>
                        <p>Surfschule Großes Meer</p>
                        <p>Am Meer 2</p>
                        <p>26624 Südbrookmerland</p>
                    </div>
                </div>
                <div class="w-1/4 flex items-center">
                    <img class="pb-2" src="https://png.icons8.com/ios/48/444444/phone.png"/>
                    <a class="no-underline hover:underline block" href="tel:049425096">04942 5096</a>
                </div>
                <div class="w-1/4 flex items-center">
                    <img class="pb-2" src="https://png.icons8.com/ios/48/444444/iphone.png"/>
                    <a class="no-underline hover:underline block" href="tel:01778879184">0177 887 91 84</a>
                </div>
                <div class="w-1/4 flex items-center">
                    <img class="pb-2" src="https://png.icons8.com/ios/48/444444/new-post.png"/>
                    <a class="no-underline hover:underline block" href="mailto:info@grosses-meer.surf">info@grosses-meer.surf</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class Contact extends Vue {

    }
</script>
