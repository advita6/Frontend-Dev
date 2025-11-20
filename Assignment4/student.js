const form = document.getElementById("regForm");
form.addEventListener("submit", e => {
    e.preventDefault();

    validate("name", /^[A-Za-z ]+$/, "Invalid name");
    validate("email", /^[\w.-]+@[\w.-]+\.\w+$/, "Invalid email");
    validate("phone", /^[0-9]{10}$/, "Phone must be 10 digits");
    validate("pass", /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/, "Weak password");
});

function validate(id, regex, msg) {
    const input = document.getElementById(id);
    const err = document.getElementById(id + "Err");
    if (!regex.test(input.value)) {
        input.style.border = "2px solid red";
        err.textContent = msg;
    } else {
        input.style.border = "2px solid green";
        err.textContent = "";
    }
}
