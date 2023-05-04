

//==========================ВАЛИДАЦИЯ EMAIL=====================================================================================================================================================================================================================================================================\
const formValid = document.querySelectorAll("[data-form]");
const inputValid = document.querySelectorAll("[data-validInput]")
if (formValid.length > 0 && inputValid.length > 0) {
	for (let index = 0; index < formValid.length; index++) {
		const element = formValid[index];
		element.addEventListener("submit", function (e) {
			for (let index = 0; index < inputValid.length; index++) {
				const inputValidTest = inputValid[index];
				if (emailTest(inputValidTest)) {
					alert('Неверно введён E-mail');
				} else {
					inputValidTest.classList.add("_passed")
				}
				inputValidTest.addEventListener("focusin", function (e) {
					//  .......
				})
			}
			e.preventDefault()
		})
	}
}
//Функция для проверки
function emailTest(input) {
	return /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i.test(input.value);
}



