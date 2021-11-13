let js = document.getElementById('js');
let button = document.getElementById("WEB");
let button1 = document.getElementById("DES");
let button2 = document.getElementById("GAME");
let button3 = document.getElementById("VIDEO");
let button4 = document.getElementById("IM");
let count = 0;
let countw = 0;
let countd = 0;
let countg = 0;
let counti = 0;

function buttondiscord() {
    alert("Дискорд - Rysik5318#7967");
}

function print() {
	count = count + 1
	console.log("Количество нажатий на кнопку ВЕБ = " + count);
}

function print1() {
	countw = countw + 1
	console.log("Количество нажатий на кнопку ДИЗАЙНЕР = " + countw);
}

function print2() {
	countd = countd + 1
	console.log("Количество нажатий на кнопку ИГРЫ = " + countd);
}

function print3() {
	countg = countg + 1
	console.log("Количество нажатий на кнопку МУЛЬТИМЕДИЯ = " + countg);
}

function print4() {
	counti = counti + 1
	console.log("Количество нажатий на кнопку МАРКЕЙТИНГ = " + counti);
}

js.addEventListener("click", buttondiscord);
button.addEventListener("click", print);
button1.addEventListener("click", print1);
button2.addEventListener("click", print2);
button3.addEventListener("click", print3);
button4.addEventListener("click", print4);