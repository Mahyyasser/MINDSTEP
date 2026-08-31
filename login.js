// Get elements
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("g");
const rememberCheckbox = document.querySelector(".remember input");
const forgotPassword = document.getElementById("f");

// Login button
loginButton.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check email
    if (email === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return;
    }

    // Check valid email
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email.");
        emailInput.focus();
        return;
    }

    // Check password
    if (password === "") {
        alert("Please enter your password.");
        passwordInput.focus();
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        passwordInput.focus();
        return;
    }

    // Remember me
    if (rememberCheckbox.checked) {
        localStorage.setItem("savedEmail", email);
    } else {
        localStorage.removeItem("savedEmail");
    }
    alert("Login successful! 🎉");
      window.location.href = "index.html";
});

// Load saved email
window.addEventListener("load", function () {
    const savedEmail = localStorage.getItem("savedEmail");

    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
    }
});


// Forget Password
forgotPassword.addEventListener("click", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email first.");
        emailInput.focus();
        return;
    }

    alert("A password reset link will be sent to your email.");
});