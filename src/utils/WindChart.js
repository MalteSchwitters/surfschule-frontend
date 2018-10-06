import { Line } from 'vue-chartjs';

export default {
    extends: Line,
    props: ['windspeed', 'windgusts'],

    mounted() {
        const windspeedHistory = this.windspeed;
        const windgustHistory = this.windgusts;
        this.renderChart({
            labels: ['-02:00', '-01:50', '-01:40', '-01:30', '-01:20', '-01:10', '-01:00',
                '-00:50', '-00:40', '-00:30', '-00:20', '-00:10', '00:00'],
            datasets: [
                {
                    label: 'Windgeschwindigkeit',
                    backgroundColor: 'rgba(151, 184, 76, 0.3)',
                    data: windspeedHistory,
                    // [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11, 0, 0, 0],
                },
                {
                    label: 'Windböen',
                    backgroundColor: 'rgba(173, 199, 166, 0.5)',
                    data: windgustHistory,
                    // data: [60, 30, 14, 50, 15, 45, 39, 80, 40, 20, 12, 11, 0, 0, 0],
                },
            ],
        });
    },

};
