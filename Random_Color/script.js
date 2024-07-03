var W = document.getElementById("W");
var H = document.getElementById("H");
var B = document.getElementById("B");
var R = document.getElementById("rect");

window.addEventListener('load', () => 
{
    W.placeholder = "Ширина";
    H.placeholder = "Высота";
    B.value = "Случайный цвет";
});

W.addEventListener("input", () => 
{ R.style.width = W.value + "px"; });

H.addEventListener("input", () => 
{ R.style.height = H.value  + "px"; });

B.addEventListener("click", () =>
{ R.style.background = "#" + Math.trunc(Math.random() * 0xFFFFFF); });
