<template>
    <canvas ref="chart"></canvas>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from 'vue-property-decorator';
    import Chart from 'chart.js';

    @Component
    export default class LineChart extends Vue {

        private chart!: Chart;

        @Prop({default: [0, 0, 0, 0]})
        private dataset1!: number[];

        @Prop({default: [0, 0, 0, 0]})
        private dataset2!: number[];

        private mounted() {
            this.chart = new Chart(<HTMLCanvasElement>this.$refs.chart, {
                type: 'line',
                data: {
                    labels: [
                        '-04:00', '', '',
                        '-03:30', '', '',
                        '-03:00', '', '',
                        '-02:30', '', '',
                        '-02:00', '', '',
                        '-01:30', '', '',
                        '-01:00', '', '',
                        '-00:30', '', '',
                        '00:00'],
                    datasets: [
                        {
                            label: 'Windgeschwindigkeit',
                            data: this.dataset1,
                            backgroundColor: [
                                'rgba(138, 184, 129, 0.2)',
                            ],
                            borderColor: [
                                'rgba(138, 184, 129, 1)',
                            ],
                            borderWidth: 1,
                        }, {
                            label: 'Böen',
                            data: this.dataset2,
                            backgroundColor: [
                                'rgba(138, 184, 129, 0.2)',
                            ],
                            borderColor: [
                                'rgba(138, 184, 129, 1)',
                            ],
                            borderWidth: 1,
                        }],
                },
                options: {
                    responsive: true,
                    legend: {
                        display: false,
                    },
                    animation: {
                        duration: 0,
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            },
                        }],
                    },
                },
            });
        }

        private updated() {
            this.chart.data.datasets![0].data = this.dataset1;
            this.chart.data.datasets![1].data = this.dataset2;
            this.chart.update();
        }
    }
</script>
