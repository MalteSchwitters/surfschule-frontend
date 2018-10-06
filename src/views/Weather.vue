<template>
    <div class="">
        <img class="w-full h-64 md:h-96 object-fit-cover" src="../assets/weather/header.jpg"/>

        <!--<nav class-->

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="wetter" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Live Wetter - Coming Soon</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <div v-if="$route.query.beta === 'true'">
                    <p class="pb-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                        Hier seht ihr die aktuelle Windgeschwindigkeit, gemessen direkt bei uns an der Surfschule. Die
                        Daten werden einmal pro Minute automatisch aktualisiert. Genauigkeit der Daten ohne Gewähr.
                    </p>
                    <p v-if="windspeed.time === 0">
                        Leider haben wir keine aktuellen Daten der letzten 10 Minuten :-(
                    </p>
                    <div v-else>
                        <div class="flex flex-wrap text-center justify-around">
                            <button class="w-1/2 md:w-1/4 px-6 pb-6 outline-none" @click="cycleUnits()">
                                <p class="text-3xl xl:text-5xl text-green-light inline">
                                    {{ convertToUnit(windspeed.windMin) }}
                                </p>
                                <p class="pl-2 text-lg xl:text-2xl text-grey-dark inline">{{ unit }}</p>
                                <p class="text-sm sm:text-sm sm:text-base">Windgeschwindigkeit</p>
                            </button>
                            <button class="w-1/2 md:w-1/4 px-6 pb-6 outline-none" @click="cycleUnits()">
                                <p class="text-3xl xl:text-5xl text-green-light inline">
                                    {{ convertToUnit(windspeed.windMax) }}
                                </p>
                                <p class="pl-2 text-lg xl:text-2xl  text-grey-dark inline">{{ unit }}</p>
                                <p class="text-sm sm:text-sm sm:text-base">Windböen</p>
                            </button>
                            <button class="w-1/2 md:w-1/4 px-6 pb-6 outline-none" @click="cycleUnits()">
                                <p class="text-3xl xl:text-5xl text-green-light inline">
                                    {{ convertToUnit(windspeed.windAvg) }}
                                </p>
                                <p class="pl-2 text-lg xl:text-2xl  text-grey-dark inline">{{ unit }}</p>
                                <p class="text-sm sm:text-sm sm:text-base">Durchschnitt</p>
                            </button>
                            <div class="w-1/2 md:w-1/4 px-6 pb-6">
                                <p class="text-3xl xl:text-5xl text-green-light">{{ windspeed.windRpm }}</p>
                                <p class="text-sm sm:text-sm sm:text-base">Umdrehungen</p>
                            </div>
                        </div>
                        <wind-chart :windspeed="windspeedHistory" :windgusts="windgustHistory"
                                    :height="150"></wind-chart>
                        <p class="py-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                            Zeitpunkt der letzte Messung: <b class="pl-2">{{ formatDateTime(windspeed.time) }}</b>
                        </p>
                    </div>
                </div>
                <p v-else class="pb-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                    Schon bald könnt ihr hier Live die aktuelle Windgeschwindigkeit bei uns an der Surfschule sehen.
                </p>
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
                    sich auch mal irren kann, sollte man immer mehrere checken. Um euch langes suchen zu ersparen,
                    haben
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
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Axios from 'axios';
    import Moment from 'moment';
    import WindChart from '../utils/WindChart';

    enum Unit {
        KMH = 'km/h',
        KNOTS = 'Knoten',
        BFT = 'Bft',
        MS = 'm/s'
    }

    @Component({components: {WindChart}})
    export default class Weather extends Vue {

        private windspeedHistory: number[] = [];
        private windgustHistory: number[] = [];

        private unit = Unit.KMH;
        private windspeed = {
            time: 0,
            windRpm: 0,
            windMin: 0,
            windMax: 0,
            windAvg: 0,
        };

        private cycleUnits() {
            if (this.unit === Unit.KMH) {
                this.unit = Unit.KNOTS;
            } else if (this.unit === Unit.KNOTS) {
                this.unit = Unit.BFT;
            } else if (this.unit === Unit.BFT) {
                this.unit = Unit.KMH;
            }
            // this.$forceUpdate();
        }

        private convertToUnit(kmh: number): string {
            if (this.unit === Unit.KNOTS) {
                return (kmh * 0.539957).toFixed(2).toString().replace('.', ',');
            }
            if (this.unit === Unit.BFT) {
                if (kmh < 1) {
                    return '0';
                }
                if (kmh < 5) {
                    return '1';
                }
                if (kmh < 11) {
                    return '2';
                }
                if (kmh < 19) {
                    return '3';
                }
                if (kmh < 28) {
                    return '4';
                }
                if (kmh < 38) {
                    return '5';
                }
                if (kmh < 49) {
                    return '6';
                }
                if (kmh < 61) {
                    return '7';
                }
                if (kmh < 74) {
                    return '8';
                }
                if (kmh < 88) {
                    return '9';
                }
                if (kmh < 102) {
                    return '10';
                }
                if (kmh < 117) {
                    return '11';
                }
                return '12';
            }
            return kmh.toFixed(2).toString().replace('.', ',');
        }

        private formatDateTime(date: any): string {
            return Moment(date).format('HH:mm');
            // return Moment(date).format('DD.MM.YYYY HH:mm');
        }

        private refreshLivedata() {
            if (document.hasFocus()) {
                Axios.get('https://api.grosses-meer.surf/api/weather/windspeed')
                    .then((response) => {
                        this.windspeed = response.data;
                    });
                setTimeout(() => this.refreshLivedata(), 30000);
            } else {
                setTimeout(() => this.refreshLivedata(), 5000);
            }
        }

        private created() {
            if (this.$route.query.beta === 'true') {
                this.refreshLivedata();
            }
            Axios.get('https://api.grosses-meer.surf/api/weather/windspeed/history')
                .then((response) => {
                    response.data.forEach((value) => {
                        this.windspeedHistory.push(value.windMin);
                        this.windgustHistory.push(value.windMax);
                    });
                });
        }
    }
</script>
