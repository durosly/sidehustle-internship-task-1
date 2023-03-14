const form = document.querySelector("form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phonenumber"]');
const genderInputs = document.querySelectorAll('input[name="gender"]');
const passwordInput = document.querySelector('input[name="password"]');
const errorElement = document.querySelector(".error");
const successElement = document.querySelector(".success");

form.addEventListener("submit", (event) => {
	event.preventDefault(); // prevent default form submission behavior

	// check if name, email, phone, gender, and password are filled
	if (!nameInput.value.trim()) {
		highlightBlock(nameInput);
		showError("Enter name");
		return false;
	}
	if (!emailInput.value.trim()) {
		highlightBlock(emailInput);
		showError("Enter email address");
		return false;
	}
	if (!phoneInput.value.trim()) {
		highlightBlock(phoneInput);
		showError("Enter phonenumber");
		return false;
	}
	if (!getSelectedGender()) {
		highlightBlock(genderInputs[0]); // highlight the first radio input if none is selected
		showError("Select a gender");
		return false;
	}
	if (!passwordInput.value.trim()) {
		highlightBlock(passwordInput);
		showError("enter password");
		return false;
	}

	// check email format
	if (emailInput.value.trim() && !isValidEmail(emailInput.value.trim())) {
		showError("Invalid email format");
		highlightBlock(emailInput);
		return false;
	}

	// submit form if everything is valid
	showSuccess("Form submitted successfully");
	form.reset();
});

function highlightBlock(element) {
	element.style.border = "2px solid red";
}

function getSelectedGender() {
	for (let i = 0; i < genderInputs.length; i++) {
		if (genderInputs[i].checked) {
			return genderInputs[i].value;
		}
	}
	return null;
}

function isValidEmail(email) {
	const emailRegex = /\S+@\S+\.\S+/;
	return emailRegex.test(email);
}

function showError(message) {
	console.log("reached");
	errorElement.textContent = message;
	errorElement.style.display = "block";
}

function showSuccess(message) {
	successElement.textContent = message;
	successElement.style.display = "block";
}
