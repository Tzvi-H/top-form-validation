const submitForm = (event) => {
  event.preventDefault();
  alert("form submitted successfully");
  form.reset();
};

form.addEventListener("submit", submitForm);

const addInputValidator = (input, condition, message) => {
  input.addEventListener("input", (e) => {
    if (!condition(input)) {
      // input.setCustomValidity(message);
      // input.reportValidity();
      input.classList.remove("valid");
      input.classList.add("invalid");
    } else {
      // input.setCustomValidity("");
      input.classList.remove("invalid");
      input.classList.add("valid");
    }
  });
};

addInputValidator(
  email,
  () => email.checkValidity(),
  "I am expecting an e-mail address!"
);
addInputValidator(
  country,
  () => country.value.length > 1,
  "I am expecting the country to have minimum 2 letters"
);
addInputValidator(
  zip,
  () => zip.value.length > 4,
  "I am expecting the zip to have minimum 5 numbers"
);
addInputValidator(
  password,
  () => password.value.length > 2,
  "I am expecting the password to have minimum 3 characters"
);
addInputValidator(
  passwordConfirm,
  () => passwordConfirm.value === password.value,
  "passwords don't match"
);

password.addEventListener('input', () => {
  if (password.value === passwordConfirm.value) {
    passwordConfirm.classList.remove("invalid");
    passwordConfirm.classList.add("valid");
  } else {
    passwordConfirm.classList.remove("valid");
    passwordConfirm.classList.add("invalid");
  }
})
