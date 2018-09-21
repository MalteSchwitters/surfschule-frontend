<template>
    <div class="">
        <img class="w-full h-32 xl:h-48 object-fit-cover" src="../assets/weather/header.jpg"/>

        <!--<nav class-->

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="wetter" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Live Wetter - Coming Soon</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                    Schon bald könnt ihr hier Live die aktuelle Windgeschwindigkeit bei uns an der Surfschule sehen.
                </p>
                <!--<img src="http://wetterstationen.meteomedia.de/messnetz/vorhersagegrafik/102000.png?ver=1536073805"/>-->
            </div>
        </div>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="webcam" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Webcam</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                    So siehts aktuell am Grossen Meer aus. Das Webcam Bild aktualisiert alle 5 Minuten.
                </p>
                <div class="w-full xl:flex">
                    <div class="xl:w-1/2 xl:mr-2 mb-6">
                        <img class="shadow-md rounded" src="http://cam1.omg.de/cam-grossesmeer/pic.jpg"/>
                    </div>
                    <div class="xl:w-1/2 xl:ml-2 mb-6 ">
                        <img class="shadow-md rounded" src="http://webcam.suedbrookmerland.de/httpdocs/image.jpg"/>
                    </div>
                </div>
            </div>
        </div>

        <!--<div class="px-6 md:px-16 lg:px-24 py-6">-->
        <!--<a id="stats" class="anchor"></a>-->
        <!--<h1 class="pt-8 text-2xl xl:text-3xl">Wind Statistiken</h1>-->
        <!--<div class="w-24 my-4 border-grey-light border-b"></div>-->
        <!--<p class="pb-6 text-sm sm:text-base xl:text-lg">-->
        <!--Coming Soon-->
        <!--</p>-->
        <!--</div>-->

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="links" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Wetterberichte</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                    Keine Information ist wichtiger für einen Windsurfer, als die aktuelle Windvorhersage. Da jeder
                    Wetterbericht
                    sich auch mal irren kann, sollte man immer mehrere checken. Um euch langes suchen zu ersparen, haben
                    wir
                    euch hier Links zu den wichtigsten Wetterberichten zusammengestellt:
                </p>

                <div class="flex">
                    <p class="w-1/3 text-sm sm:text-base xl:text-lg pr-4">Windguru: </p>
                    <a class="w-2/3 text-sm sm:text-base xl:text-lg no-underline hover:underline"
                       href="https://www.windguru.cz/106165" target="_blank">
                        www.windguru.cz
                    </a>
                </div>
                <div class="flex">
                    <p class="w-1/3 text-sm sm:text-base xl:text-lg pr-4">Windfinder: </p>
                    <a class="w-2/3 text-sm sm:text-base xl:text-lg no-underline hover:underline"
                       href="https://www.windfinder.com/forecast/grosses_meer" target="_blank">
                        www.windfinder.com
                    </a>
                </div>
                <div class="flex">
                    <p class="w-1/3 text-sm sm:text-base xl:text-lg pr-4">Meteomedia: </p>
                    <a class="w-2/3 text-sm sm:text-base xl:text-lg no-underline hover:underline"
                       href="http://wetterstationen.meteomedia.de/?station=102000&wahl=vorhersage" target="_blank">
                        wetterstationen.meteomedia.de
                    </a>
                </div>
                <div class="flex">
                    <p class="w-1/3 text-sm sm:text-base xl:text-lg pr-4">Friesenwetter: </p>
                    <a class="w-2/3 text-sm sm:text-base xl:text-lg no-underline hover:underline"
                       href="http://www.friesenwetter.de/wettervorhersage" target="_blank">
                        www.friesenwetter.de
                    </a>
                </div>
                <div class="flex">
                    <p class="w-1/3 text-sm sm:text-base xl:text-lg pr-4">Wisuki: </p>
                    <a class="w-2/3 text-sm sm:text-base xl:text-lg no-underline hover:underline"
                       href="http://wisuki.com/spot/1529/grosses-meer" target="_blank">
                        wisuki.com
                    </a>
                </div>
                <div class="flex">
                    <p class="w-1/3 text-sm sm:text-base xl:text-lg pr-4">Regenradar: </p>
                    <a class="w-2/3 text-sm sm:text-base xl:text-lg no-underline hover:underline"
                       href="https://www.wetteronline.de/regenradar/niedersachsen" target="_blank">
                        www.wetteronline.de
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({components: {}})
    export default class Weather extends Vue {

    }
</script>
