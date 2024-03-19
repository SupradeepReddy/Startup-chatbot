document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
  
    signupForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Handle signup form submission here
      console.log("Signup form submitted!");
    });
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault();
      // Handle login form submission here
      console.log("Login form submitted!");
    });
  });
