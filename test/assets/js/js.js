let button = document.getElementById("WEB");
let button1 = document.getElementById("DES");
let button2 = document.getElementById("GAME");
let js = document.getElementById('js');
let count = 0;
let count1 = 0;
let count2 = 0;

function buttondiscord() {
    alert("Дискорд - Rysik5318#7967");
}

function print() {
	count = count + 1
	console.log("Количество нажатий на кнопку ВЕБ = " + count);
}
function print1() {
	count1 = count1 + 1
	console.log("Количество нажатий на кнопку ДИЗАЙНЕР = " + count);
}
function print2() {
	count2 = count2 + 1
	console.log("Количество нажатий на кнопку ИГРЫ = " + count);
}

js.addEventListener("click", buttondiscord)
button.addEventListener("click", print);
button1.addEventListener("click", print1);
button2.addEventListener("click", print2);