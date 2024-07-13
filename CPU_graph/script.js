var current;
var previous;
var reqs = 0;
var ers = 0;
var ers_pers = 0;

async function FetchData()
{
    var res;
    await fetch('request.php')
    .then(response => response.text())
    .then(data => 
        {
            res = data;
        })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);
    });
    return res;
}

async function clk()
{
    reqs++;
    previous = current;
    current = await FetchData();
    if (current == '0') 
    {
        ers++;
        ers_pers = ers / reqs * 100;
    }

    console.log('cur ' + current);

    var req_amount = document.getElementById('req_amount');
    var er_percent = document.getElementById('er_percent');

    req_amount.textContent = reqs;
    er_percent.textContent = ers_pers;
}

document.addEventListener("DOMContentLoaded", async function() 
{
    setInterval(clk, 5000);
});

var ctx = document.getElementById('myChart').getContext('2d');

// Создаем новый график
var myChart = new Chart(ctx, {
    type: 'line', 
    data: {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],  // Метки по оси X (месяцы)
        datasets: [{
            label: 'Загруженность процессора',  // Название линии
            data: [12, 19, 3, 5, 2, 3],  // Данные по оси Y (количество продаж)
            borderColor: 'rgb(75, 192, 192)',  // Цвет линии
            borderWidth: 2,  // Ширина линии
            pointBackgroundColor: 'rgb(75, 192, 192)'  // Цвет точек
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true  // Начинать отсчет от нуля на оси Y
            }
        }
    }
});
