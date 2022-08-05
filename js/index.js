const form = document.querySelector('.form');
let errors = [];

//функция проверка одного инпута
function checkValidity(input) {

	if (input.validity.valueMissing) {
		errors.push(`Поле ${input.placeholder} не заполнено`);
	}

	if (input.validity.patternMismatch) {
		errors.push('Неверный формат заполнения');
	}

	if (input.validity.typeMismatch) {
		errors.push('Неверный формат заполнения');
	}

	if (input.validity.tooShort) {
		errors.push('Неверный пароль. Пароль должен содержат больше 8 символов');
	}
}

// проверка всех инпутов и отправка формы
form.addEventListener('submit', (event) => {
	event.preventDefault();

	errors = [];

	const inputs = document.querySelectorAll('.form__input'); //находим все инпуты

	// на каждый инпут проходимся циклом, проверяем на валидность
	for (let input of inputs) {
		checkValidity(input);
	}

	let err = document.querySelector('.form__error');
	err.innerHTML = errors.join(' <br>');
});