<template>
    <div>
        <img class="w-full h-64 md:h-96 object-fit-cover" src="../assets/contact/header.jpg"/>

        <!--<nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey">-->
        <!--<a href="#kontakt" class="text-grey-darker hover:text-blue uppercase no-underline"># Kontakt</a>-->
        <!--<a href="#anfahrt" class="text-grey-darker hover:text-blue uppercase no-underline"># Anfahrt</a>-->
        <!--<a href="#parken" class="text-grey-darker hover:text-blue uppercase no-underline"># Parkmöglichkeiten</a>-->
        <!--</nav>-->

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="kontakt" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Kontakt</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <div class="flex pb-4">
                    <img class="rounded-full w-24 h-24 mr-6" src="../assets/contact/jens.jpg"/>
                    <div class="pr-8 pt-4">
                        <h2 class="text-base sm:text-lg xl:text-xl pb-2">Jens Radde</h2>
                        <p class="text-sm sm:text-base xl:text-lg">Inhaber, Surf- und Segellehrer</p>
                    </div>
                    <!--<img class="rounded-full w-24 h-24 mr-4" src="../assets/contact/malte.jpg"/>-->
                    <!--<img class="rounded-full w-24 h-24 mr-4" src="../assets/contact/lasse.jpg"/>-->
                </div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Moin, <br>
                    mein Name ist Jens Radde. Vor mehr als 30 Jahren habe ich mein Hobby zum Beruf gemacht. Als
                    Surflehrer leite ich seitdem erfolgreich die Surf- und Segelschule am Großen Meer. Seit mehr als 20
                    Jahren schule und prüfe ich als Ausbilder im Verband Deutscher Windsurfingschulen e.V. (VDWS) auch
                    Surflehrer und Surflehrerteams. Mitgliedsschulen des VDWS stehen für qualifizierte Instruktoren,
                    Schulungsmaterial, das an die unterschiedlichsten Bedürfnisse angepasst ist und modernste Methodik.
                    Auch in unserer Schule garantieren wir dafür.
                </p>
                <div class="pb-6 flex flex-col md:flex-row md:text-center justify-between">
                    <div class="flex items-center xl:w-1/4 md:flex-col">
                        <img class="p-4 w-16 h-16" src="https://png.icons8.com/ios/40/444444/marker.png"/>
                        <div>
                            <p class="text-sm sm:text-base xl:text-lg">Surfschule Großes Meer</p>
                            <p class="text-sm sm:text-base xl:text-lg">Am Meer 2</p>
                            <p class="text-sm sm:text-base xl:text-lg">26624 Südbrookmerland</p>
                        </div>
                    </div>
                    <div class="flex items-center xl:w-1/4 md:flex-col">
                        <img class="p-4 w-16 h-16" src="https://png.icons8.com/ios/40/444444/phone.png"/>
                        <a class="text-sm sm:text-base xl:text-lg no-underline hover:underline block"
                           href="tel:049425096">04942
                            5096</a>
                    </div>
                    <div class="flex items-center xl:w-1/4 md:flex-col">
                        <img class="p-4 w-16 h-16" src="https://png.icons8.com/ios/40/444444/iphone.png"/>
                        <a class="text-sm sm:text-base xl:text-lg no-underline hover:underline block"
                           href="tel:01778879184">0177
                            887 91 84</a>
                    </div>
                    <div class="flex items-center xl:w-1/4 md:flex-col">
                        <img class="p-4 w-16 h-16" src="https://png.icons8.com/ios/40/444444/new-post.png"/>
                        <a class="text-sm sm:text-base xl:text-lg no-underline hover:underline block"
                           href="mailto:info@grosses-meer.surf">info@grosses-meer.surf</a>
                    </div>
                </div>
            </div>
        </div>

        <gallery :images="gallery_team"></gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="anfahrt" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Anfahrt</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    So findet ihr uns:
                </p>
            </div>
        </div>
        <iframe
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJcaeGvVw_tkcRmKzKU2eDS-k&amp;key=AIzaSyAE6noO4zWPsDgbiMB-LgPgcfu89-zkeiM"
                width="100%" height="600" frameborder="0" style="border:0" allowfullscreen="">
        </iframe>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="parken" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Parkmöglichkeiten</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <div class="pb-6 md:flex">
                    <div class="flex-grow md:pr-8">
                        <h2 class="text-base sm:text-lg xl:text-xl pb-2">PKW</h2>
                        <p class="pb-6 text-sm sm:text-base xl:text-lg">
                            Mit dem PKW kann man entweder auf P1 oder P2 parken. Den kürzesten Weg zur Surfschule hat
                            man dabei von
                            P2. Beide Parkplätze sind von 9:00 bis 19:00 Uhr kostenpflichtig. Jede Stunde kostet 0,50€.
                            Für den
                            ganzen Tag werden 4,00€ fällig. Die Höchstparkdauer beträgt 10 Stunden.
                        </p>
                        <h2 class="text-base sm:text-lg xl:text-xl pb-2">Wohnmobile</h2>
                        <p class="pb-6 text-sm sm:text-base xl:text-lg">
                            Für Wohnmobile gibt es einen seperaten Wohnmobilhafen bei P3. Alternativ könnt ihr auch auf
                            den
                            <a class="text-sm sm:text-base xl:text-lg no-underline hover:underline"
                               href="https://www.grossesmeer.de/campingplatz/campingplatz.html">Campingplatz</a>
                            direkt nebenan fahren.
                            Achtung: Das Parken mit einem Wohnmobil auf P2 ist nicht gestattet!
                        </p>
                    </div>
                    <img class="md:h-80 rounded shadow" src="../assets/contact/parking.jpg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Gallery from '../components/Gallery.vue';

    @Component({components: {Gallery}})
    export default class Contact extends Vue {
        private gallery_team = [{
            image: require('../assets/contact/team01.jpg'),
            thumbnail: require('../assets/contact/team01_thumb.jpg'),
        }, {
            image: require('../assets/contact/team02.jpg'),
            thumbnail: require('../assets/contact/team02_thumb.jpg'),
        }, {
            image: require('../assets/contact/joy01.jpg'),
            thumbnail: require('../assets/contact/joy01_thumb.jpg'),
        }];
    }
</script>
