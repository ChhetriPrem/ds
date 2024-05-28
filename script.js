document.addEventListener("DOMContentLoaded", function () {
  const signInButton = document.getElementById("signin");
  const signInFormDiv = document.getElementById("signin-form-div");
  const signUpFormDiv = document.getElementById("signup-container");

  // Ensure the initial display state is set
  signInFormDiv.style.display = "none";

  // Toggle the sign-in form visibility
  signInButton.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    console.log(signInFormDiv.style.display); // Log the current display value for debugging

    if (
      signInFormDiv.style.display === "none" ||
      signInFormDiv.style.display === ""
    ) {
      signInFormDiv.style.display = "block";
      signUpFormDiv.style.display = "none";
    } else {
      signInFormDiv.style.display = "none";
      signUpFormDiv.style.display = "block";
    }
  };

  // Prevent the sign-in form from submitting and refreshing the page
  const signInForm = document.getElementById("signin-form");
  signInForm.onsubmit = function (event) {
    event.preventDefault();
    // Add your form submission logic here (e.g., Firebase auth)
    console.log("Sign-in form submitted without page refresh");
  };

  // Prevent the default action of the sign-in form's submit button
  const signInSubmitButton = document.getElementById("signin-submit-btn-el");
  signInSubmitButton.onclick = function (event) {
    event.preventDefault();
    signInForm.onsubmit(event);
  };

  // Similar logic can be added for the sign-up form if needed
  const signUpForm = document.getElementById("signup-form");
  const signUpSubmitButton = document.getElementById("signup-submit-btn-el");

  signUpForm.onsubmit = function (event) {
    event.preventDefault();
    // Add your form submission logic here (e.g., Firebase auth)
    console.log("Sign-up form submitted without page refresh");
  };

  signUpSubmitButton.onclick = function (event) {
    event.preventDefault();
    signUpForm.onsubmit(event);
  };
});
