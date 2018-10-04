import { Line } from 'vue-chartjs';

export default {
    extends: Line,
    props: ['windspeed', 'windgusts'],

    mounted() {
        // Overwriting base render method with actual data.
        this.renderChart({
            labels: [
                '-02:00',
                '-01:55',
                '-01:50',
                '-01:45',
                '-01:40',
                '-01:35',
                '-01:30',
                '-01:25',
                '-01:20',
                '-01:15',
                '-01:10',
                '-01:05',
                '-01:00',
                '-00:55',
                '-00:50',
                '-00:45',
                '-00:40',
                '-00:35',
                '-00:30',
                '-00:25',
                '-00:20',
                '-00:15',
                '-00:10',
                '-00:05',
                '00:00'],
            datasets: [
                {
                    label: 'Windgeschwindigkeit',
                    backgroundColor: 'rgba(151, 184, 76, 0.3)',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11, 0, 0, 0],
                },
                {
                    label: 'Windböen',
                    backgroundColor: 'rgba(173, 199, 166, 0.5)',
                    data: [60, 30, 14, 50, 15, 45, 39, 80, 40, 20, 12, 11, 0, 0, 0],
                },
            ],
        });
    },
};
