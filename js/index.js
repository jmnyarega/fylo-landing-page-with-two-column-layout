const form1 = document.getElementById("hero__form");
const form2 = document.getElementById("early-access__form");

form1.addEventListener("submit", form1Submit);
form2.addEventListener("submit", form2Submit);

function form1Submit(event) {
  event.preventDefault();
  const email = document.getElementById("hero__email");
  const error__container = document.getElementById("hero__error");
  error__container.innerText = "";
  email.style.border = "1px inset hsl(243, 87%, 12%)";
  const email_value = email.value;
  if (!emailIsValid(email_value) || !email_value.trim()) {
    error__container.innerText = "Please check your email";
    email.style.border = "2px solid lightcoral";
    error__container.style.color = "lightcoral";
  }
}

function form2Submit(event) {
  event.preventDefault();
  const email = document.getElementById("early-access__email");
  const error__container = document.getElementById("early-access__error");
  error__container.innerText = "";
  email.style.border = "none";
  const email_value = email.value;
  if (!emailIsValid(email_value) || !email_value.trim()) {
    error__container.innerText = "Please check your email";
    email.style.border = "2px solid lightcoral";
  }
}

// utils

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
