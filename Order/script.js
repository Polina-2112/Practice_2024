
var long, lat, myMap;
function init()
{
    myMap = new ymaps.Map("map", {
    center: [54.167324, 37.584789],
            zoom: 15
        });
}
navigator.geolocation.getCurrentPosition(show, error, { maximumAge: 0, timeout: 5000, enableHighAccuracy: true });
function show(position)
{
    long = position.coords.longitude;
    lat = position.coords.latitude;
    myMap.setCenter([lat, long]);
    console.log("show");
    console.log(lat); console.log(long); 
}
function error(positionError)
{
    long = 54.167324;
    lat = 37.584789;
    myMap.setCenter([lat, long]);
    console.log("error")
}
ymaps.ready(init);

function Button_Clicked()
    {
        var fio = document.getElementById("fio");
        var phone = document.getElementById("phone");
        var email = document.getElementById("email");
        var comm = document.getElementById("comm");
        var mes = document.getElementById("mes");
        mes.style.color = "#FF1605";

        var temp, f = true;

        if (comm.value.length > 500) { temp = "Ваш комментарий слишком большой!"; f = false; }

        if (email.value.includes("@") == false && email.value != "") { temp = "Email должен содержать символ '@'!"; f = false; }

        if (phone.value.trim() == "") { temp = "Впишите ваш номер телефона!"; f = false; }
        for (let i = 0; i < phone.value.length; i++) { if (!(/\d/.test(phone.value[i]))) { temp = "Номер телефона не может содержать цифры!"; break; f = false; } }

        if (fio.value.trim() == "") { temp = "Заполните ФИО!"; f = false; }
        for (let i = 0; i < fio.value.length; i++) { if (/\d/.test(fio.value[i])) { temp = "ФИО не должно содержать цифр!"; break; f = false; } }   
        
        if (f) 
            { temp = "Ваш заказ успешно оформлен!"; mes.style.color = "#04DB00"; }

        console.log(temp);
        mes.textContent = temp;
    };