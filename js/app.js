const formElement = document.getElementById("form");
const errorElement = document.getElementById("error");
const error1Element = document.getElementById("error1");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameElement = document.getElementById("name");
  const emailElement = document.getElementById("email");

  let nameValue = nameElement.value;
  let emailValue = emailElement.value;
  
  errorElement.innerText = "";
  error1Element.innerText = "";
  nameElement.classList.remove("redborder");
  emailElement.classList.remove("redborder");
  
  if (nameValue == "") {
    errorElement.innerText += "Name is required!";
    nameElement.classList.add("redborder");
  }
  if (emailValue == "") {
    error1Element.innerText += "Enter your email!";
    emailElement.classList.add("redborder");
  }
    console.log("good to go");
  
});
