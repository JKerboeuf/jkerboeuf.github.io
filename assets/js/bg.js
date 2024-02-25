const patterns = [
	"square",
	"wave-line",
	"diamonds",
	"cross",
	"lines"
];
const rand = Math.floor(Math.random() * patterns.length);

document.querySelector('body').style.backgroundImage = `url(/assets/img/patterns/${patterns[rand]}.svg)`;