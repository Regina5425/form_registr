const button = document.querySelector('.form__btn');

button.addEventListener('click', () => {
	const userName = document.querySelector('#username'),
		email = document.querySelector('#email'),
		login = document.querySelector('#login'),
		password = document.querySelector('#password'),
		confirmPassword = document.querySelector('#conf-password'),
		phone = document.querySelector('#phone'),
		err = document.querySelectorAll('.form__error');

		err.textContent = '';

	if (userName.value == '') {
		err[0].textContent = 'Please write your full name';
	} else if (email.value == '') {
		err[1].textContent = 'Please write your e-mail';
	} else if (login.value == '') {
		err[2].textContent = 'Please write your login';
	} else if (password.value == '' || password.value.length < 8 || password.value.length >= 13) {
		err[3].textContent = 'Incorrect password! Password should be 7-12 symbols';
	} else if (confirmPassword.value !== password.value) {
		err[4].textContent = 'Password doesn\'t match';
	} else if (phone.value == '') {
		err[5].textContent = 'Please write correct phone number';
	} else {
		alert(`Welcome to our website, ${userName.value}!`);
	}
});