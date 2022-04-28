const submitForm = (event) => {
  event.preventDefault();
  alert("form submitted successfully");
  form.reset();
};

form.addEventListener("submit", submitForm);

email.addEventListener("input", function (event) {
  if (!email.validity.valid) {
    email.setCustomValidity("I am expecting an e-mail address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

country.addEventListener("input", function (event) {
  if (country.value.length < 3) {
    country.setCustomValidity(
      "I am expecting the country to have minimum 2 letters"
    );
    country.reportValidity();
  } else {
    country.setCustomValidity("");
  }
});

zip.addEventListener("input", function (event) {
  if (zip.value.length < 5) {
    zip.setCustomValidity("I am expecting the zip to have minimum 5 numbers");
    zip.reportValidity();
  } else {
    zip.setCustomValidity("");
  }
});

password.addEventListener("input", function (event) {
  if (password.value.length < 3) {
    password.setCustomValidity(
      "I am expecting the password to have minimum 3 characters"
    );
    password.reportValidity();
  } else {
    password.setCustomValidity("");
  }
});

passwordConfirm.addEventListener("input", function (event) {
  if (passwordConfirm.value !== password.value) {
    passwordConfirm.setCustomValidity("passwords don't match");
    passwordConfirm.reportValidity();
  } else {
    passwordConfirm.setCustomValidity("");
  }
});
