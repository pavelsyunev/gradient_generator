var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("randomGradient");

setGradient();

function setGradient() {

	body.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradient() {

	var newColor1 = '#' + Math.random('color').toString(16).slice(-6);
	var newColor2 = '#' + Math.random('color').toString(16).slice(-6);

	color1.value = newColor1;
	color2.value = newColor2;

	return setGradient();

	// body.style.background =
	// "linear-gradient(to right, "
	// + color1.value
	// + ", "
	// + color2.value
	// + ")";
	//
	// css.textContent = body.style.background + ";";

}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);
