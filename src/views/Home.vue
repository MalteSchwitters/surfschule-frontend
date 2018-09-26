<template>
    <div>
        <img class="w-full h-64 xl:h-80 object-fit-cover" src="../assets/start/header.jpg"/>

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
                <p class="text-sm sm:text-base xl:text-lg">
                    Bei uns könnt ihr:
                </p>
                <p class="text-sm sm:text-base xl:text-lg">-
                    <router-link class="text-sm sm:text-base xl:text-lg no-underline hover:underline" to="surfing">
                        Windsurfen lernen und Surfmaterial leihen
                    </router-link>
                </p>
                <p class="text-sm sm:text-base xl:text-lg">-
                    <router-link class="text-sm sm:text-base xl:text-lg no-underline hover:underline" to="sup">
                        SUP Boards ausleihen
                    </router-link>
                </p>
                <p class="text-sm sm:text-base xl:text-lg">-
                    <router-link class="text-sm sm:text-base xl:text-lg no-underline hover:underline" to="sailing">
                        Segeln lernen und Jollen leihen
                    </router-link>
                </p>
            </div>
        </div>

        <gallery
                :image1="require('../assets/surfing/thumbs/surfing06.jpg')"
                :image2="require('../assets/sup/thumbs/sup05.jpg')"
                :image3="require('../assets/sailing/thumbs/segeln05.jpg')">
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
                :image1="require('../assets/start/thumbs/meer05.jpg')"
                :image2="require('../assets/start/thumbs/meer04.jpg')"
                :image3="require('../assets/start/thumbs/meer03.jpg')">
        </gallery>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="shop" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Unser Shop</h1>
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
                :image1="require('../assets/start/thumbs/shop04.jpg')"
                :image2="require('../assets/start/thumbs/shop03.jpg')"
                :image3="require('../assets/start/thumbs/shop05.jpg')">
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
