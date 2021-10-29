const diameter = document.querySelector('.spindle');
const material = document.querySelector('#material');
const spindleScore = document.querySelector('.spindle-rate');
const calcBtn = document.querySelector('button');
const errorShow = document.querySelector('.error-info');

const calculate = () => {
	errorShow.style.visibility = 'hidden';
	spindleScore.textContent = '';
	const patter = (3.14 * diameter) / 25000;
	const score = parseFloat(material.value);
	const diam = parseFloat(diameter.value);
	// console.log(diameter.value);
	// console.log(material.value);
	let box = 3.14 * diameter.value;
	// console.log(box);
	let wynik = (25000 / box) * material.value;
	// console.log(wynik);

	spindleScore.textContent = `${wynik.toFixed(0)}`;
	checkInf();
	checkString();
};

// errorShow.style.visibility = 'visible';
const checkInf = () => {
	if (diameter.value === '') {
		spindleScore.textContent = '';
	} else if (diameter.value < '0') {
		errorShow.style.visibility = 'visible';
		errorShow.textContent = 'Wpisz odpowiednią średnicę wiertła!';
		spindleScore.textContent = '';
	} else if (diameter.value == 0) {
		errorShow.style.visibility = 'visible';
		spindleScore.textContent = '';
	}
};

const checkString = () => {
	const re = new RegExp('[^abc]');
	if (diameter.value.match(re)) {
		console.log('ok');
	} else {
		console.log('blad');
		errorShow.style.visibility = 'visible';
		errorShow.textContent = 'Błąd średnicy narzędzia!';
	}
};

calcBtn.addEventListener('click', calculate);
