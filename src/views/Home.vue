<template>
    <div>
        <img class="" src="../assets/start/header.jpg"/>

        <nav class="px-6 py-6 -mt-2 flex flex-col xl:flex-row justify-around bg-grey-lighter">
            <a href="#willkommen" class="text-grey-darker hover:text-blue uppercase no-underline"># Willkommen</a>
            <a href="#grossesmeer" class="text-grey-darker hover:text-blue uppercase no-underline"># Das Grosse Meer</a>
            <a href="#shop" class="text-grey-darker hover:text-blue uppercase no-underline"># Surfshop</a>
        </nav>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <a id="willkommen" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Willkommen!</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-sm xl:text-lg">
                Herzlich Wilkommen auf der Website der Surf- und Segelschule Grosses Meer! Egal, ob ihr entspannt mit dem
                SUP Board die Kanäle erkunden oder etwas Action beim Windsurfen sucht: Wir haben das richtige Angebot an
                Kursen und topaktuellem Material im Verleih! Dazu haben wir passende Surfermode und Accesoirs für euch in
                unserem kleinen Surfschulshop. Kommt vorbei! Unser Tipp: Als Gruppe (Schulklasse, Jugendgruppe, Studenten)
                auf dem Campingplatz gleich nebenan übernachten und gemeinsam zum Surfen gehen!
            </p>
            <p class="pb-6 text-sm xl:text-lg">
                Bei uns könnt ihr:
            </p>
            <router-link class="block no-underline hover:underline" to="surfing">>> Windsurfen</router-link>
            <router-link class="block no-underline hover:underline" to="sup">>> Stand up Paddling</router-link>
            <router-link class="block no-underline hover:underline" to="sailing">>> Segeln</router-link>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/start/thumbs/start01.jpg"/>
            <img class="w-1/3" src="../assets/start/thumbs/start02.jpg"/>
            <img class="w-1/3" src="../assets/start/thumbs/meer04.jpg"/>
        </div>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <a id="grossesmeer" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Das Grosse Meer</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-sm xl:text-lg">
                Das Große Meer ist ein natürlich entstandener Niedermoorsee und liegt zwischen Aurich und Emden bei
                Bedekaspel im Südbrookmerland, am Rande der ostfriesischen Geest im Übergang zur Emsmarsch. Der See ist mit
                einer freien Wasserfläche von etwa 289 Hektar (mit Röhrichtverlandungszonen ca. 400 ha) der viertgrößte See
                in Niedersachsen. Das Große Meer ist – bis auf wenige tiefere Stellen – nur 0,5 bis 1,0 Meter tief. Es
                gliedert sich in zwei nahezu getrennte Wasserflächen (Nord- und Südteil). Eine Besonderheit ist, dass der
                mittlere Wasserstand durch künstliche Entwässerung 1,4 Meter unter dem Meeresspiegel (NN) liegt.
                Weitere Informationen (Wikipedia)
            </p>
            <p class="pb-6 text-sm xl:text-lg">
                Das stehtiefe Gewässer liefert ideale Bedingungen um sich voll auf das Erlernen und Verbessern der
                Fahrtechnik zu konzentrieren. Surfen und Segeln stehen hier an erster Stelle, die fächerförmig ausrückenden
                Wasserwanderwege bieten zudem abwechslungsreiche Möglichkeiten das Südbrookmerland mit dem SUP zu erkunden.
                Wir, die Surfschule am Großen Meer, freuen uns auf euren Besuch!
            </p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/start/thumbs/meer01.jpg"/>
            <img class="w-1/3" src="../assets/start/thumbs/meer02.jpg"/>
            <img class="w-1/3" src="../assets/start/thumbs/meer03.jpg"/>
        </div>

        <div class="px-8 md:px-16 lg:px-24 py-6">
            <a id="shop" class="anchor"></a>
            <h1 class="pt-8 text-2xl xl:text-3xl">Unser Shop</h1>
            <div class="w-24 my-4 border-grey-light border-b"></div>
            <p class="pb-6 text-sm xl:text-lg">
                In unserem Shop findet ihr alles was das Surfer-Herz begehrt: Boards, Segel, Masten, Gabeln und sonstiges
                Zubehör, sowohl neu als auch gebraucht. Zudem findet ihr auch eine umfangreiche Auswahl an Surfer-Fashion
                vor. Unser Sortiment umfasst Neoprenanzüge, Surfschuhe, Lycras und aktuelle Surfer Streetwear, Flip-Flops,
                Sonnenbrillen, Surferschmuck, uvm. Neben dem Verleih von Surfmaterial bieten wir auch die Lagerung des
                eigenen Surfmaterials direkt an der Surfschule an.
            </p>
        </div>

        <div class="flex items-start">
            <img class="w-1/3" src="../assets/start/thumbs/shop04.jpg"/>
            <img class="w-1/3" src="../assets/start/thumbs/shop03.jpg"/>
            <img class="w-1/3" src="../assets/start/thumbs/shop05.jpg"/>
        </div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({ components: {} })
    export default class Home extends Vue {

    }
</script>
