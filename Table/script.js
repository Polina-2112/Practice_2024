const t = document.getElementById("table");
var t_num = [];
const first = 5;

document.addEventListener("DOMContentLoaded", function() 
{
    for (var i = 0; i < first; i++) { // i - номер строки
        const row = document.createElement('tr');
        row.id = i;
        t.appendChild(row);

        t_num.push([]);

        for (var j = 0; j < first; j++) 
            { // j - номер столбца
            const cell = document.createElement('td');
            cell.id = i.toString() + j.toString();
            cell.innerHTML = '<input type="text" id="' + i.toString() + j.toString() + '_input" onchange="InputChanged(id)">';
            row.appendChild(cell);
            document.getElementById(i.toString() + j.toString() + '_input').placeholder = i.toString() + j.toString();
            
            t_num[i].push(j);
        }
    }
    console.log(t_num);
});

function plus_column()
{
    var RowAmount = t_num.length;
    var ColumnsAmount = t_num[0].length;

    for (var i = 0; i < RowAmount; i++)
    {
        const row = document.getElementById(i);
        const cell = document.createElement('td');
        cell.id = i.toString() + (ColumnsAmount).toString();
        cell.placeholder = cell.id;
        cell.innerHTML = '<input type="text" id="' + i.toString() + (ColumnsAmount).toString() + '_input onchange="InputChanged(id)">';
        row.appendChild(cell);
        document.getElementById(i.toString() + (ColumnsAmount).toString() + '_input').placeholder = i.toString() + (ColumnsAmount).toString();
        t_num[i].push(ColumnsAmount);
    }
}

function minus_column()
{
    var RowAmount = t_num.length;
    var ColumnsAmount = t_num[0].length;

    if (ColumnsAmount != 1)
    {
        for (var i = 0; i < RowAmount; i++)
        {
            const row = document.getElementById(i);
            var cell = document.getElementById(i.toString() + (ColumnsAmount-1).toString());
            row.removeChild(cell);
            t_num[i].pop();
        }
    }
}

function plus_row()
{
    var RowAmount = t_num.length;
    var ColumnsAmount = t_num[0].length;

    const row = document.createElement('tr');
    row.id = RowAmount;
    t.appendChild(row);
    t_num.push([]);
    for (var i = 0; i < ColumnsAmount; i++)
    {
        const cell = document.createElement('td');
        cell.id = RowAmount.toString() + i.toString();
        cell.placeholder = RowAmount.toString() + i.toString();
        row.appendChild(cell);
        document.getElementById(RowAmount.toString() + i.toString()).innerHTML 
            = '<input type="text" id="' + RowAmount.toString() + i.toString() + '_input onchange="InputChanged(id)">';
        document.getElementById(RowAmount.toString() + i.toString() + '_input').placeholder 
            = RowAmount.toString() + i.toString();

        t_num[RowAmount].push(i);
    }
}

function minus_row()
{
    var RowAmount = t_num.length;
    
    if (RowAmount != 1)
    {
        const row = document.getElementById(RowAmount-1);
        t.removeChild(row);
        t_num.pop();
    }
}

function InputChanged(id)
{
    if (localStorage)
}
