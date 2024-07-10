document.addEventListener("DOMContentLoaded", async function() 
{
    const url = 'exercise.develop.maximaster.ru/service/products/';

    fetch('request.php')
    .then(response => response.json())
    .then(data => 
    {
       res = data;
       const th = document.querySelector('#table thead');
       const t = document.querySelector('#table tbody');
       t.innerHTML = '';
       th.innerHTML = '';
       console.log(res);

       const row = document.createElement('tr');
       th.appendChild(row);

       const number = document.createElement('td');
        number.textContent = 'ID';
        row.appendChild(number);        

        const nameCell = document.createElement('td');
        nameCell.textContent = 'Название';
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = 'Цена';
        row.appendChild(priceCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = 'Количество';
        row.appendChild(quantityCell);

        const sum = document.createElement('td');
        sum.textContent = 'Сумма';
        row.appendChild(sum);

        res.forEach((product, index) => 
            {
        const row = document.createElement('tr');
        t.appendChild(row);

        const number = document.createElement('td');
        number.textContent = index + 1;
        row.appendChild(number);        

        const nameCell = document.createElement('td');
        nameCell.textContent = product.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = product.price;
        row.appendChild(priceCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = product.quantity;
        row.appendChild(quantityCell);

        const sum = document.createElement('td');
        sum.textContent = product.quantity * product.price;
        row.appendChild(sum);
       });
    })
    .catch(error => {
        console.error('Ошибка при получении данных:', error);
        document.getElementById('error_container').textContent = 'Error fetching data';
    });
});

function to_update()
{
    const bc = document.getElementById('begin_cost');
    const ec = document.getElementById('end_cost');
    const er = document.getElementById('error_container');

    if (parseInt(bc.value) < 0 || parseInt(ec.value < 0)) er.textContent = 'Цена не может быть отрицательной!';
    else
    {
        if (parseInt(bc.value) > parseInt(ec.value)) er.textContent = 'Начальная цена не должна быть больше конечной!'; 
            else
            {
                if ((bc.value == 0 && ec.value == 0) || (bc.value == '' && ec.value == ''))
                {
                    const t = document.querySelector('#table tbody');
                    t.innerHTML = '';
                    res.forEach((product, index) => 
                        {
                    const row = document.createElement('tr');
                    t.appendChild(row);
            
                    const number = document.createElement('td');
                    number.textContent = index + 1;
                    row.appendChild(number);        
            
                    const nameCell = document.createElement('td');
                    nameCell.textContent = product.name;
                    row.appendChild(nameCell);
            
                    const priceCell = document.createElement('td');
                    priceCell.textContent = product.price;
                    row.appendChild(priceCell);
            
                    const quantityCell = document.createElement('td');
                    quantityCell.textContent = product.quantity;
                    row.appendChild(quantityCell);
            
                    const sum = document.createElement('td');
                    sum.textContent = product.quantity * product.price;
                    row.appendChild(sum);
                   });
                }
                else
                {
                    if (bc.value == '') bc.value = 0;
                    if (ec.value == '') ec.value = 0;
                    
                    var flag = false;

                    const t = document.querySelector('#table tbody');
                    t.innerHTML = '';

                    res.forEach((product, index) => 
                    {
                        if (product.price >= parseInt(bc.value) && product.price <= parseInt(ec.value))
                        {
                            flag = true;

                            const row = document.createElement('tr');
                            t.appendChild(row);
                    
                            const number = document.createElement('td');
                            number.textContent = index + 1;
                            row.appendChild(number);        
                    
                            const nameCell = document.createElement('td');
                            nameCell.textContent = product.name;
                            row.appendChild(nameCell);
                    
                            const priceCell = document.createElement('td');
                            priceCell.textContent = product.price;
                            row.appendChild(priceCell);
                    
                            const quantityCell = document.createElement('td');
                            quantityCell.textContent = product.quantity;
                            row.appendChild(quantityCell);
                    
                            const sum = document.createElement('td');
                            sum.textContent = product.quantity * product.price;
                            row.appendChild(sum);
                        }
                    });

                    if (flag == false)
                    {
                        const th = document.querySelector('#table thead');
                        th.innerHTML = '';
                        er.textContent = 'Нет данных, попадающих под условие фильтра';
                    }
                }
        }
    }

}