<template>
    <div>
        <img class="w-full h-64 md:h-96 object-fit-cover" src="../assets/start/header.jpg"/>

        <!--<nav class="xl:px-6 py-4 -mt-2 flex flex-wrap hidden justify-around bg-grey">-->
        <!--<a href="#willkommen" class="text-base text-grey-darker hover:text-blue uppercase no-underline"># Willkommen</a>-->
        <!--<a href="#grossesmeer" class="text-base text-grey-darker hover:text-blue uppercase no-underline"># Das Grosse Meer</a>-->
        <!--<a href="#shop" class="text-base text-grey-darker hover:text-blue uppercase no-underline"># Surfshop</a>-->
        <!--</nav>-->

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="willkommen" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Willkommen!</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Herzlich Wilkommen auf der Website der Surf- und Segelschule Grosses Meer! Egal, ob ihr entspannt
                    mit dem SUP Board die Kanäle erkunden oder etwas Action beim Windsurfen sucht: Wir haben das
                    richtige Angebot an Kursen und topaktuellem Material im Verleih! Dazu haben wir passende Surfermode
                    und Accesoirs für euch in unserem kleinen Surfschulshop. Kommt vorbei! Unser Tipp: Als Gruppe
                    (Schulklasse, Jugendgruppe, Studenten) auf dem Campingplatz gleich nebenan übernachten und gemeinsam
                    zum Surfen gehen!
                </p>
                <div class="py-6 flex flex-row justify-between sm:justify-around text-center">
                    <router-link to="/surfing"
                                 class="flex flex-col items-center w-1/4 no-underline rounded xl:hover:bg-blue-lightest py-6">
                        <img class="bg-blue-light rounded-full p-3 xl:p-6 mb-6"
                             src="https://png.icons8.com/ios/50/fafafa/windsurfing.png">
                        <div>
                            <p class="text-sm sm:text-base xl:text-lg">Windsurfkurse & Verleih</p>
                        </div>
                    </router-link>
                    <router-link to="/sup"
                                 class="flex flex-col items-center w-1/4 no-underline rounded xl:hover:bg-green-lightest py-6">
                        <img class="bg-green-light rounded-full p-3 xl:p-6 mb-6"
                             src="https://png.icons8.com/ios/50/fafafa/sup.png">
                        <div>
                            <p class="text-sm sm:text-base xl:text-lg">SUP Kurse & Verleih</p>
                        </div>
                    </router-link>
                    <router-link to="/sailing"
                                 class="flex flex-col items-center w-1/4 no-underline rounded hover:bg-grey-lightest py-6">
                        <img class="bg-grey-light rounded-full p-3 xl:p-6 mb-6"
                             src="https://png.icons8.com/ios/50/fafafa/sail.png">
                        <div>
                            <p class="text-sm sm:text-base xl:text-lg">Segelkurse & Verleih</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

        <gallery
                :image1="require('../assets/surfing/surfing01_thumb.jpg')"
                :image2="require('../assets/sup/sup05_thumb.jpg')"
                :image3="require('../assets/sailing/segeln05_thumb.jpg')">
        </gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="grossesmeer" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Das Grosse Meer</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Das Große Meer ist ein natürlich entstandener Niedermoorsee und liegt zwischen Aurich und Emden bei
                    Bedekaspel im Südbrookmerland, am Rande der ostfriesischen Geest im Übergang zur Emsmarsch. Der See
                    ist mit einer freien Wasserfläche von etwa 289 Hektar (mit Röhrichtverlandungszonen ca. 400 ha) der
                    viertgrößte See in Niedersachsen. Das Große Meer ist – bis auf wenige tiefere Stellen – nur 0,5 bis
                    1,0 Meter tief. Es gliedert sich in zwei nahezu getrennte Wasserflächen (Nord- und Südteil). Eine
                    Besonderheit ist, dass der mittlere Wasserstand durch künstliche Entwässerung 1,4 Meter unter dem
                    Meeresspiegel (NN) liegt.
                    <a class="text-sm sm:text-base xl:text-lg no-underline hover:underline"
                       href="https://de.wikipedia.org/wiki/Gro%C3%9Fes_Meer_(S%C3%BCdbrookmerland)" target="_blank">
                        Weitere Informationen (Wikipedia)
                    </a>
                </p>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    Das stehtiefe Gewässer liefert ideale Bedingungen um sich voll auf das Erlernen und Verbessern der
                    Fahrtechnik zu konzentrieren. Surfen und Segeln stehen hier an erster Stelle, die fächerförmig
                    ausrückenden Wasserwanderwege bieten zudem abwechslungsreiche Möglichkeiten das Südbrookmerland mit
                    dem SUP zu erkunden. Wir, die Surfschule am Großen Meer, freuen uns auf euren Besuch!
                </p>
            </div>
        </div>

        <gallery
                :image1="require('../assets/start/meer05_thumb.jpg')"
                :image2="require('../assets/start/meer04_thumb.jpg')"
                :image3="require('../assets/start/meer03_thumb.jpg')">
        </gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="shop" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Unser Surfschulshop</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-base xl:text-lg">
                    In unserem Shop findet ihr alles was das Surfer-Herz begehrt: Boards, Segel, Masten, Gabeln und
                    sonstiges Zubehör, sowohl neu als auch gebraucht. Zudem findet ihr auch eine umfangreiche Auswahl an
                    Surfer-Fashion vor. Unser Sortiment umfasst Neoprenanzüge, Surfschuhe, Lycras und aktuelle Surfer
                    Streetwear, Flip-Flops, Sonnenbrillen, Surferschmuck, uvm. Neben dem Verleih von Surfmaterial bieten
                    wir auch die Lagerung des eigenen Surfmaterials direkt an der Surfschule an.
                </p>
            </div>
        </div>

        <gallery
                :image1="require('../assets/start/shop04_thumb.jpg')"
                :image2="require('../assets/start/shop03_thumb.jpg')"
                :image3="require('../assets/start/shop05_thumb.jpg')">
        </gallery>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Gallery from '../components/Gallery.vue';

    @Component({components: {Gallery}})
    export default class Home extends Vue {

    }
</script>
