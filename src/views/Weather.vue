<template>
    <div class="">
        <img class="w-full h-64 md:h-96 object-fit-cover" src="../assets/weather/header.jpg"/>

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="wetter" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Live Wetter</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                    Hier seht ihr die aktuelle Windgeschwindigkeit, gemessen direkt bei uns an der Surfschule. Die
                    Daten werden einmal pro Minute automatisch aktualisiert. Genauigkeit der Daten ohne Gewähr.
                </p>
                <div>
                    <div class="flex flex-wrap text-center justify-around">
                        <button class="w-1/2 md:w-1/3 px-4 pb-6 outline-none" @click="cycleUnits()">
                            <p class="text-3xl xl:text-5xl text-green-light inline">
                                {{ formatToUnit(windspeed.windAvg) }}
                            </p>
                            <p class="text-lg xl:text-2xl text-grey-dark inline">{{ unit }}</p>
                            <p class="text-sm sm:text-sm sm:text-base">Windgeschwindigkeit</p>
                        </button>
                        <button class="w-1/2 md:w-1/3 px-4 pb-6 outline-none" @click="cycleUnits()">
                            <p class="text-3xl xl:text-5xl text-green-light inline">
                                {{ formatToUnit(windspeed.windMax) }}
                            </p>
                            <p class="text-lg xl:text-2xl text-grey-dark inline">{{ unit }}</p>
                            <p class="text-sm sm:text-sm sm:text-base">Windböen</p>
                        </button>
                    </div>
                    <line-chart ref="chart"
                                :dataset1="windHistory.map(value => convertToUnit(value.windAvg))"
                                :dataset2="windHistory.map(value => convertToUnit(value.windMax))"></line-chart>
                    <p class="py-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                        Zeitpunkt der letzte Messung: <b class="pl-2">{{ formatDateTime(windspeed.time) }}</b>
                    </p>
                </div>
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

        <div class="p-2">
            <div class="px-6 md:px-16 lg:px-24 py-4 rounded mb-2 bg-white shadow xl:shadow-none">
                <a id="links" class="anchor"></a>
                <h1 class="pt-8 text-xl sm:text-3xl">Wetterberichte</h1>
                <div class="w-24 my-4 border-grey-light border-b"></div>
                <p class="pb-6 text-sm sm:text-sm sm:text-base xl:text-lg">
                    Keine Information ist wichtiger für einen Windsurfer, als die aktuelle Windvorhersage. Da jeder
                    Wetterbericht sich auch mal irren kann, sollte man immer mehrere checken. Um euch langes suchen zu
                    ersparen, haben wir euch hier Links zu den wichtigsten Wetterberichten zusammengestellt:
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
    import LineChart from '../components/LineChart.vue';

    enum Unit {
        KMH = 'km/h',
        KNOTS = 'Knoten',
        BFT = 'Bft',
        MS = 'm/s'
    }

    @Component({components: {LineChart}})
    export default class Weather extends Vue {

        private unit = Unit.KMH;

        private windspeed = {
            time: 0,
            windRpm: 0,
            windMin: 0,
            windMax: 0,
            windAvg: 0,
        };

        private windHistory: { windMin: number, windAvg: number, windMax: number }[] = [];

        private created() {
            this.refreshLivedata();
        }

        private refreshLivedata() {
            if (document.hasFocus()) {
                Axios.get('https://api.grosses-meer.surf/api/weather/windspeed')
                    .then((response) => {
                        this.windspeed = response.data;
                    });
                Axios.get('https://api.grosses-meer.surf/api/weather/windspeed/history')
                    .then((response) => {
                        this.windHistory = response.data;
                        (<LineChart>this.$refs.chart).$forceUpdate();
                    });
                setTimeout(() => this.refreshLivedata(), 30000);
            } else {
                setTimeout(() => this.refreshLivedata(), 5000);
            }
        }

        private cycleUnits() {
            if (this.unit === Unit.KMH) {
                this.unit = Unit.KNOTS;
            } else if (this.unit === Unit.KNOTS) {
                this.unit = Unit.BFT;
            } else if (this.unit === Unit.BFT) {
                this.unit = Unit.KMH;
            }
            (<LineChart>this.$refs.chart).$forceUpdate();
        }

        private formatToUnit(kmh: number): string {
            const converted = this.convertToUnit(kmh);
            if (this.unit === Unit.BFT) {
                return converted.toString();
            }
            return converted.toFixed(2).toString().replace('.', ',');
        }

        private convertToUnit(kmh: number): number {
            if (this.unit === Unit.KNOTS) {
                return (kmh * 0.539957);
            }
            if (this.unit === Unit.BFT) {
                if (kmh < 1) {
                    return 0;
                }
                if (kmh < 5) {
                    return 1;
                }
                if (kmh < 11) {
                    return 2;
                }
                if (kmh < 19) {
                    return 3;
                }
                if (kmh < 28) {
                    return 4;
                }
                if (kmh < 38) {
                    return 5;
                }
                if (kmh < 49) {
                    return 6;
                }
                if (kmh < 61) {
                    return 7;
                }
                if (kmh < 74) {
                    return 8;
                }
                if (kmh < 88) {
                    return 9;
                }
                if (kmh < 102) {
                    return 10;
                }
                if (kmh < 117) {
                    return 11;
                }
                return 12;
            }
            return kmh;
        }

        private formatDateTime(date: any): string {
            // convert to gmt
            return Moment(date).add(2, 'hour').format('HH:mm');
        }
    }
</script>
