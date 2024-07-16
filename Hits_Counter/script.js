const H = document.getElementById("hits_amount");
const T = document.getElementById("time");
const E = document.getElementById("err");

document.addEventListener("DOMContentLoaded", function() 
{
    fetch('request.php')
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if (data.includes('Error') || data.includes('error')) 
           {
             E.innerText = "Произошла ошибка, попробуйте позже!"
             H.textContent = '? раз'
           }
        else if (data == 2 | data == 3 | data == 4) H.textContent = data + ' раза';
        else H.textContent = data + ' раз';
    })
    .catch(error => 
        {   
            console.error('Error:', error);
            E.innerText = "Произошла ошибка, попробуйте позже!"
        });

    GetTime();
    setInterval(GetTime, 1000);
})

function GetTime()
{
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    if (minutes < 10) minutes = '0' + minutes.toString();
    if (seconds < 10) seconds = '0' + seconds.toString();

    T.textContent = hours + ':' + minutes + ':' + seconds;
}