document.addEventListener("DOMContentLoaded", async function() 
{
    const username = 'cli', pass = '12344321';
    const auth = btoa(`${username}:${pass}`);
    const res = await fetch('http://exercise.develop.maximaster.ru/service/products/', 
        {
            method: 'GET',
            mode: 'no-cors',
            headers: {'Authorization': `Basic ${auth}`}
        });
    /*const data = await res.json();
    const t  = document.getElementById('table_container');
    t.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;*/
});