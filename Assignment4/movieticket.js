function validateName(n) {
    return /^[A-Za-z ]+$/.test(n);
}

function validateEmail(e) {
    return /^[\w.-]+@[\w.-]+\.\w+$/.test(e);
}

function validateSeats(s) {
    return /^[1-9]$|10/.test(s);
}

function bookTicket(name, email, seats) {
    if (!validateName(name) || !validateEmail(email) || !validateSeats(seats)) {
        console.log("Invalid input");
        return;
    }

    const booking = { name, email, seats };
    console.log("Ticket:", booking);
}

bookTicket("Advita", "a@mail.com", 3);

