var ctx = document.getElementById('canvas').getContext('2d');

var data = {
  labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
  datasets: [{
    data: [20, 10, 4, 2]
  }]
}

var myRadarChart = new Chart(ctx, {
  type: 'radar',
  data: data,
  options: {
    maintainAspectRatio: false,
    scale: {
      // Hides the scale
      display: true
    }
  }
});