const diameter = document.querySelector('.spindle');
const material = document.querySelector('#material');
const spindleScore = document.querySelector('.spindle-rate');
const calcBtn = document.querySelector('button');
const errorShow = document.querySelector('.error-info');
const body = document.querySelector('body');
const toggleBtn = document.getElementById('toggleMode');
const spindleInfo = document.querySelector('.spindle-info');

const calculate = () => {
	errorShow.style.visibility = 'hidden';
	spindleInfo.style.visibility = 'visible';
	spindleScore.textContent = '';
	const patter = (3.14 * diameter) / 25000;
	const score = parseFloat(material.value);
	const diam = parseFloat(diameter.value);
	let box = 3.14 * diameter.value;
	let totalyScore = (25000 / box) * material.value;
	spindleScore.textContent = `${totalyScore.toFixed(0)}`;
	checkString();
	checkInf();
};

const checkInf = () => {
	if (diameter.value === '') {
		spindleScore.textContent = '';
	} else if (diameter.value < '0') {
		errorShow.style.visibility = 'visible';
		errorShow.textContent = 'Wpisz odpowiednią średnicę wiertła!';
		spindleScore.textContent = '';

		spindleInfo.style.visibility = 'hidden';
	} else if (diameter.value == 0) {
		errorShow.style.visibility = 'visible';
		spindleScore.textContent = '';
	}
};

const checkString = () => {
	const re = new RegExp('[^abc]');
	if (diameter.value.match(re)) {
	} else {
		errorShow.style.visibility = 'visible';
		errorShow.textContent = 'Błąd średnicy narzędzia!';
		spindleInfo.style.visibility = 'hidden';
	}
};

const handleDarkMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark');
	} else {
		body.setAttribute('data-mode', 'light');
	}
};

toggleBtn.addEventListener('click', handleDarkMode);
calcBtn.addEventListener('click', calculate);