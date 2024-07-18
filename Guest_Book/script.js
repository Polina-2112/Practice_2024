var nname = document.getElementById('name');
var mes = document.getElementById('message');

document.addEventListener('DOMContentLoaded', Show());

document.getElementById('To_Send').addEventListener('click', function() 
{
        var n, m;
        if (nname.value.trim() == '') n = 'Анонимно';
        else n = nname.value.trim(); 

        if (mes.value.trim() == '') {
            window.alert("Заполните ваше сообщение!");
            return;
        }
        else m = mes.value.trim();

        console.log('in JS ' + n + '_ _' + m + '_');
        fetch('request.php?action=send&name=' + n + '&com=' + m)
});

function Show()
{
    fetch('request.php?action=get')
    .then(response => 
    {
        if (!response.ok)
            throw new Error(' ');
        return response.json();
    })
    .then(data => 
    {
        if (data.error)
            { 
                window.alert("Произошла ошибка. Попробуйте позже");
                return;
            }
            const container = document.querySelector('.comments');
            container.innerHTML = ''; 

            data.forEach((message, index) => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');

                const firstStringElement = document.createElement('div');
                firstStringElement.classList.add('FirstString');
                
                const dateElement = document.createElement('p');
                dateElement.textContent = message.Date;
                firstStringElement.appendChild(dateElement);
                
                const nameElement = document.createElement('p');
                nameElement.textContent = message.Name;
                firstStringElement.appendChild(nameElement);

                const messageElement = document.createElement('div');
                messageElement.classList.add('message');
                messageElement.textContent = message.Comment;

                commentElement.appendChild(firstStringElement);
                commentElement.appendChild(messageElement);

                container.appendChild(commentElement);
        });
    })
}

