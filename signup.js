const inputs = document.querySelectorAll(".input input");
const nameInput = inputs[0];
const emailInput = inputs[1];
const passwordInput = inputs[2];
const confirmPasswordInput = inputs[3];
const ageInput = document.querySelector(".age input");
const signupButton = document.getElementById("g");

signupButton.addEventListener("click", function (event) {

    event.preventDefault();

    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Please enter your email.");
        emailInput.focus();
        return;
    }

    if (!emailInput.value.includes("@")) {
        alert("Please enter a valid email.");
        emailInput.focus();
        return;
    }

    if (passwordInput.value.trim() === "") {
        alert("Please enter a password.");
        passwordInput.focus();
        return;
    }

    if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters.");
        passwordInput.focus();
        return;
    }

    if (confirmPasswordInput.value.trim() === "") {
        alert("Please confirm your password.");
        confirmPasswordInput.focus();
        return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Passwords do not match.");
        confirmPasswordInput.focus();
        return;
    }

    if (ageInput.value === "") {
        alert("Please select your date of birth.");
        ageInput.focus();
        return;
    }

    alert("Account created successfully! 🎉");
    window.location.href = "login.html";
});



    document.getElementById("g").addEventListener("click", function() {
        window.location.href = "index.html";})
