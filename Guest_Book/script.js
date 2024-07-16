var nname = document.getElementById('name');
var mes = document.getElementById('message');

document.getElementById('To_Send').addEventListener('click', function() 
{
        var n, m, time;
        console.log(mes.textContent);

        if (nname.value.trim() == '') n = 'Анонимно';
        else n = nname.value.trim(); 

        if (mes.value.trim() == '') {
            window.alert("Заполните ваше сообщение!");
            //return;
        }

});
