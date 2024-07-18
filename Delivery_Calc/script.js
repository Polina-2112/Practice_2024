var CS = document.getElementById("City_Select");
var W = document.getElementById("Weight");
var Calc = document.getElementById("To_Calc");
var A = document.getElementById("Answer");

document.addEventListener('DOMContentLoaded', function() 
{
    if (localStorage.getItem('CacheTime') == null)
    {
        var ct = new Date();
        localStorage.setItem('CacheTime', ct.toISOString());
    }

    var ct = new Date(localStorage.getItem('CacheTime'));
    if (localStorage.getItem('cities') === null 
    || ct.getDay() != new Date().getDay() 
    || ct.getMonth() != new Date().getMonth() 
    || ct.getFullYear() != new Date().getFullYear())
    {
        localStorage.setItem('CacheTime', new Date());
        console.log('Дата ' + localStorage.getItem('CacheTime'));

        fetch('request.php?action=getCities') 
        .then(response => response.json())
        .then(data => 
        {
            if (data.error) 
                A.innerText = 'Произошла ошибка, попробуйте позже.';
            else 
            { 
                localStorage.setItem('cities', JSON.stringify(data));
                console.log('Не мяу');
                data.forEach(city => 
                {
                    const opt = document.createElement('option');
                    opt.value = city;
                    opt.textContent = city;
                    if (city == 'Москва') opt.selected = true;
                    CS.appendChild(opt); 
                });
            }
        })
        .catch(error => {
            A.innerText = 'Произошла ошибка. Попробуйте позже.';
        console.error('Ошибка:');
        });
    }
    else
    {
        var c = JSON.parse(localStorage.getItem('cities'));
        c.forEach(city => 
            {
                const opt = document.createElement('option');
                opt.value = city;
                opt.textContent = city;
                if (city == 'Москва') opt.selected = true;
                CS.appendChild(opt); 
            });
        console.log('ну мяу');
        console.log(c);
    }
});

function To_Calc()
{
    var weight = W.value.trim();
    var city = CS.value;

    if (weight == '' || weight == null || weight == '0') 
    {
        A.style.color = 'red'; A.innerText = 'Укажите вес груза!'
    }
    else if (isNaN(parseFloat(weight))) 
    {
        A.style.color = 'red'; A.innerText = 'Неккоректный ввод!'
    }
    else
    {
    fetch('request.php?action=getCalcs&city=' + city + '&weight=' + weight)
    .then(response => response.json())
    .then(data => 
    {
        if (data.error) 
        A.innerText = 'Произошла ошибка, попробуйте позже.';
        else
        {
            console.log(data);
            if (data["status"] == "error") 
            {
                A.style.color = 'red';
                A.innerText = 'Произошла ошибка, попробуйте еще раз';
            }
            else
            {
                A.style.color = '#A475D1';
                A.innerText = data["message"];
            }
        }
    })
    .catch(error => {
        A.style.color = 'red';
        A.innerText = 'Произошла ошибка. Попробуйте позже.';
       console.error('Ошибка:' + error);
    });
}
}
