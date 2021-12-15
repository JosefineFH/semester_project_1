console.log('event form js')

const form = document.querySelector("form");
const fullName = document.querySelector("#full_name");
const email = document.querySelector("#email");
const selectedEvent = document.querySelector('#events');
const message = document.querySelector('#message')

const outPutError = document.querySelector(".error_message")

console.log(selectedEvent)

function formValidation(event) {

    event.preventDefault();
    outPutError.innerHTML = "";

    if (!lengthChecker(fullName.value, 0) === true) {
        console.log('Name error')
        outPutError.innerHTML += `<p class="error"> - Your name is missing of filled in incorrectly</p>`;
    }
    if (!emailValidation(email.value) === true) {
        console.log('email error')
        outPutError.innerHTML += `<p class="error">- Your email is missing or is filled in incorrectly</p>`;
    }
    if (!lengthChecker(selectedEvent.value, 1) === true) {
        console.log('select an event')
        outPutError.innerHTML += `<p class="error">- You need to select an event you want to attend.</p>`;
    }
    if (!lengthChecker(message.value, 25) === true) {
        console.log('Text area is empty')
        outPutError.innerHTML += `<p class="error">- Your message has been send to us and we will contact you in 1 - 2 work day's</p>`;
    } else {
        outPutError.innerHTML = `<p>Your message has been send to us and we will contact you in 1 - 2 work day's with your booking number</p>`;
        outPutError.className = "styleMessage";

        setTimeout(function () {
            form.submit()
        }, 4000)

    }
}

function emailValidation(email) {
    const symbols = /\S+@\S+\.\S+/;
    const pattern = symbols.test(email);
    return pattern;
}

function lengthChecker(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false
    }
}

form.addEventListener('submit', formValidation)