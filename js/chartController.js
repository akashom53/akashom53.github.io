var ctx = document.getElementById('canvas').getContext('2d');

var data = {
  labels: ['Android (Java)', 'iOS (Objective C)', 'JavaScript', 'Python', 'Core Java', 'iOS (Swift)', 'Processing', 'Django', 'Unity'],
  datasets: [{
    backgroundColor: 'rgba(0, 255, 100, 0.5)',
    borderColor: 'rgba(0, 155, 0, 1)',
    data: [90, 75, 45, 75, 90, 45, 60, 40, 65]
  }]
}


var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scale: {
      ticks: {
        display: false,
        suggestedMax: 100,
        beginAtZero: true
      },
      pointLabels: {
        fontSize: 15
      }
    }
  }
});