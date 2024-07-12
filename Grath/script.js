var g = document.getElementById("graph").getContext("2d");
var hour = new Date().getHours();
var min = new Date().getMinutes();
var time = hour + ':' + min;
var L = 30;
var times = [];
var vals = [];

function TimeUpdate()
{
    hour = new Date().getHours();
    min = new Date().getMinutes();
    time = hour + ':' + min;
    console.log('in TimeUpdate ' + time);
    return time;
}

function update()
{
    console.log('in update');
    if (times.length != 30) times.push(TimeUpdate()); 
    else 
    {
        for (var i = 0; i < 29; i++) times[i] = times[i+1];
        times[29] = TimeUpdate();
    }

    if (vals.length != 30) vals.push(Math.trunc(Math.random() * 100)); 
    else 
    {
        for (var i = 0; i < 29; i++) vals[i] = vals[i+1];
        vals[29] = Math.random() * 100;
    }

    console.log(times); console.log(vals);
    graph.data.labels = times;
    graph.data.datasets[0].data = vals;
    graph.update();
}

var graph = new Chart(g, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: '# of Votes',
        data: [],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
        responsive: true, 
        maintainAspectRatio: false 
    }
  });

  setInterval(update, 5000);