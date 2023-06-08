const formElement = document.getElementById("form");
const errorElement = document.getElementById("error");
formElement.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameElement = document.getElementById("name");
  const emailElement = document.getElementById("email");
  const passwordElement = document.getElementById("password");
  const passwordConfirmationElement = document.getElementById(
    "password_confirmation"
  );
  let nameValue = nameElement.value;
  let emailValue = emailElement.value;
  let passwordValue = passwordElement.value;
  let passwordConfirmationValue = passwordConfirmationElement.value;

  function ErrorOut() {
    errorElement.innerText = "";
  }
  nameElement.classList.remove("red-border");
  emailElement.classList.remove("red-border");
  passwordElement.classList.remove("red-border");
  passwordConfirmationElement.classList.remove("red-border");
  if (nameValue == "") {
    errorElement.innerText = "Enter your name!";
    nameElement.classList.add("red-border");
  }
  errorElement.innerText = "";

  if (emailValue == "") {
    errorElement.innerText = "Enter your email!";
    emailElement.classList.add("red-border");
  }
  if (passwordValue == "") {
    errorElement.innerText = "Enter your password!";
    passwordElement.classList.add("red-border");
  }
  if (passwordValue != passwordConfirmationValue) {
    errorElement.innerText = "Password does not match!";
    passwordElement.classList.add("red-border");
    passwordConfirmationElement.classList.add("red-border");
  } else {
    console.log("Good to go!");
  }
  // console.log(nameValue);
  // console.log(nameElement);
});
