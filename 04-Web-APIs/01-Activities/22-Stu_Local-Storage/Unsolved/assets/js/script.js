var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page
  var storedEmail = localStorage.getItem("storedEmail");
  var storedPassword = localStorage.getItem("storedPassword");
  userEmailSpan.textContent = storedEmail;
  userPasswordSpan.textContent = storedPassword;
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
  localStorage.setItem("storedEmail", email)
  localStorage.setItem("storedPassword", password);
  renderLastRegistered();
  }
});



// * It's done when Last Registered User displays the last email and password saved using `localStorage`, if it exists.

// * It's done when, once the `signUpButton` is clicked, the email and password entered into the text boxes is saved using `localStorage`.

// * It's done when the information under Last Registered User is updated to reflect the data stored using `localStorage`.