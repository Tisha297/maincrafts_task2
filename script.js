function validateForm() {

    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;

    if (name.trim() === "" || email.trim() === "") {

        alert("Please enter your name and email.");

        return false;
    }

    alert("Thanks for reaching out! Your message is ready to send.");

    return true;
}