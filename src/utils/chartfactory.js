// var chartid = document.currentScript.getAttribute('canvas');
// var labels = document.currentScript.getAttribute('labels').split(", ");
// var data = document.currentScript.getAttribute('data').split(", ");

function createBarChart(canvasid, labels, data) {
    labels = labels.split(", ");
    data = data.split(", ");

    var canvas = document.getElementById(canvasid);
    var ctx = canvas.getContext('2d');

    var chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: 'rgba(138, 184, 129, 0.2)',
                borderColor: 'rgba(138, 184, 129, 1)',
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false
            },
            animation: {
                duration: 0
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function createPieChart(canvasid, labels, data) {
    labels = labels.split(", ");
    data = data.split(", ");

    var canvas = document.getElementById(canvasid);
    var ctx = canvas.getContext('2d');

    var chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            legend: {
                position: 'left'
            },
            animation: {
                duration: 0
            }
        }
    });
}