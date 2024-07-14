var current;
var previous;
var reqs = 0;
var ers = 0;
var ers_pers = 0;
var times = [];
var vals = [];
var min; 
const valAmount = 360;

var g = document.getElementById("graph").getContext("2d");

var graph = new Chart(g, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Загруженность процессора',
        data: [],
        borderWidth: 1,
        borderColor: '#A475D1',
        pointRadius: 0
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


function TimeUpdate()
{
    if (min == new Date().getMinutes()) return '';
    else
    {
        hour = new Date().getHours();
        min = new Date().getMinutes();
        var time = hour + ':' + min;
        console.log('in TimeUpdate ' + time);
        return time;
    }
}

async function FetchData()
{
    return fetch('request.php')
    .then(response => response.text())
    //.then(data => { res = data; console.log(data); })
    .catch(error => { console.error('Ошибка при получении данных:', error); });
}

async function clk()
{
    reqs++;
    previous = current;
    current = await FetchData();
    console.log('current ' + current);
    if (current == '0') 
    {
        ers++;
        ers_pers = ers / reqs * 100;
        current = previous;
    }
    else 
    {
        let num = parseFloat(current);
        if (isNaN(num)) current = previous;
    }

    if (times.length != valAmount) times.push(TimeUpdate()); 
    else 
    {
        for (var i = 0; i < valAmount-1; i++) times[i] = times[i+1];
        times[valAmount-1] = TimeUpdate();
    }

    if (vals.length != valAmount) vals.push(current); 
    else 
    {
        for (var i = 0; i < valAmount-1; i++) vals[i] = vals[i+1];
        vals[valAmount-1] = current;
    }

    var req_amount = document.getElementById('req_amount');
    var er_percent = document.getElementById('er_percent');

    req_amount.textContent = reqs;
    er_percent.textContent = ers_pers;

    console.log(vals);
    graph.data.labels = times;
    graph.data.datasets[0].data = vals;
    graph.update();
}

document.addEventListener("DOMContentLoaded", async function() 
{ setInterval(clk, 5000); });

