const diameter = document.querySelector('.spindle');
const material = document.querySelector('#material');
const spindleScore = document.querySelector('.spindle-rate');
const calcBtn = document.querySelector('button');

const calculate = () => {
	const patter = (3.14 * diameter) / 25000;
	const score = parseFloat(material.value);
	const diam = parseFloat(diameter.value);
	console.log(diameter.value);
	console.log(material.value);
	let box = 3.14 * diameter.value;
	console.log(box);
	let wynik = (25000 / box) * material.value;
	console.log(wynik);
	// console.log(wynik);

	// const diameterScore = score + 10;
	// console.log(diameterScore);
	spindleScore.textContent = `${wynik.toFixed(0)}`;
	checkInf();
};

const checkInf = () => {
	if (diameter.value === '') {
		spindleScore.textContent = 'Podaj obroty';
	}
};

calcBtn.addEventListener('click', calculate);
// diameter.addEventListener('change', calculate);
calculate();
