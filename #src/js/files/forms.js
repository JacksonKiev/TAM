document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();
		let error = formValidate(form);
		let formData = new FormData(form);
		formData.append('image', formImage.files[0]);

		if (error === 0) {
			form.classList.add('_sending');
			let response = await fetch('sendmail.php', {
				method: "POST",
				body: formData
			});
			if (response.ok) {
				let result = await response.json();
				alert(result.message);
				formPreview.innerHTML = '';
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert("Ошибка");
				form.classList.remove('_sending');
			}
		} else {
			alert("Введите все необходимые поля");
		}

	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === 'checkbox' && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === "") {
					formAddError(input);
					error++;
				}
			}
		}
		return error;

	}


	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error')
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error')
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}

	const formImage = document.getElementById('formImage');
	const formPreview = document.getElementById('formPreview');


	formImage.addEventListener("change", () => {
		uploadFile(formImage.files[0]);

	});

	function uploadFile(file) {
		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
			alert('Разрешены только изображения.');
			formImage.value = '';
			return;
		}
		if (file.size > 2 * 1024 * 1024) {
			alert('Файл должен быть менее 2 МБ.');
			formImage.value = '';
			return;
		}


		var reader = new FileReader();
		reader.onload = function (e) {
			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
		};
		reader.onerror = function (e) {
			alert('Ошибка')
		};
		reader.readAsDataURL(file);
	}

	let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
	inputs_init(inputs);

	function inputs_init(inputs) {
		if (inputs.length > 0) {
			for (let index = 0; index < inputs.length; index++) {
				const input = inputs[index];
				const input_g_value = input.getAttribute('data-value');
				input_placeholder_add(input);
				if (input.value != '' && input.value != input_g_value) {
					input_focus_add(input);
				}
				input.addEventListener('focus', function (e) {
					if (input.value == input_g_value) {
						input_focus_add(input);
						input.value = '';
					}
					if (input.getAttribute('data-type') === "pass") {
						input.setAttribute('type', 'password');
					}
					if (input.classList.contains('_date')) {
						/*
						input.classList.add('_mask');
						Inputmask("99.99.9999", {
							//"placeholder": '',
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
							onincomplete: function () {
								input_clear_mask(input, input_g_value);
							}
						}).mask(input);
						*/
					}
					if (input.classList.contains('_phone')) {
						//'+7(999) 999 9999'
						//'+38(999) 999 9999'
						//'+375(99)999-99-99'
						input.classList.add('_mask');
						Inputmask("+380(99) 999 9999", {
							"placeholder": '111',
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
							onincomplete: function () {
								input_clear_mask(input, input_g_value);
							}
						}).mask(input);
					}
					if (input.classList.contains('_digital')) {
						input.classList.add('_mask');
						Inputmask("9{1,}", {
							"placeholder": '',
							clearIncomplete: true,
							clearMaskOnLostFocus: true,
							onincomplete: function () {
								input_clear_mask(input, input_g_value);
							}
						}).mask(input);
					}
					form_remove_error(input);
				});
				input.addEventListener('blur', function (e) {
					if (input.value == '') {
						input.value = input_g_value;
						input_focus_remove(input);
						if (input.classList.contains('_mask')) {
							input_clear_mask(input, input_g_value);
						}
						if (input.getAttribute('data-type') === "pass") {
							input.setAttribute('type', 'text');
						}
					}
				});
				if (input.classList.contains('_date')) {
					datepicker(input, {
						customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
						customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
						formatter: (input, date, instance) => {
							const value = date.toLocaleDateString()
							input.value = value
						},
						onSelect: function (input, instance, date) {
							input_focus_add(input.el);
						}
					});
				}
			}
		}
	}

	function input_placeholder_add(input) {
		const input_g_value = input.getAttribute('data-value');
		if (input.value == '' && input_g_value != '') {
			input.value = input_g_value;
		}
	}

	function input_focus_add(input) {
		input.classList.add('_focus');
		input.parentElement.classList.add('_focus');
	}

	function input_focus_remove(input) {
		input.classList.remove('_focus');
		input.parentElement.classList.remove('_focus');
	}

	function input_clear_mask(input, input_g_value) {
		input.inputmask.remove();
		input.value = input_g_value;
		input_focus_remove(input);
	}

});