const error = document.querySelector(".error");
const email = document.querySelector("#email");

function validateEmail() {

  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    error.innerHTML = "Please provide a valid email address";
    error.style.display = "block";
    error.style.color = "var(--lightRed)";
    email.style.borderColor = "var(--lightRed)";
    return false;
  }

  error.innerHTML = "You are good to GO!";
  error.style.display = "block";
  error.style.color = "green";
  email.style.borderColor = "green";
  return true;
}

function formValidation() {
  if (!validateEmail()) {
    error.innerHTML = "Whoops! It looks like you forgot to add your email";
    email.style.borderColor = "var(--lightRed)";
    error.style.display = "block";
    setTimeout(() => {
      error.style.display = "none";
      email.style.borderColor = "var(--paleBlue)";
    }, 3000);
    return false;
  }
}
