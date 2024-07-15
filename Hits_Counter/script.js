const H = document.getElementById("hits_amount");
const T = document.getElementById("time");

document.addEventListener("DOMContentLoaded", function() 
{
    fetch('path_to_your_php_file.php')
    .then(response => response.text())
    .then(data => {
        if (data.includes('Error')) {}
    })
            .catch(error => console.error('Error:', error));
})