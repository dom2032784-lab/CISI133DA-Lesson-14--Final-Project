/*
    Course: CIS133DA
    Section: 17925
    Final Project
    Author: Dominic Romero
*/

document.addEventListener("DOMContentLoaded", function () {
    var lastModified = document.getElementById("lastModified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});

function submitConsultationForm() {
    var formMessage = document.getElementById("formMessage");
    if (formMessage) {
        formMessage.textContent = "Thank you. Your consultation request has been submitted.";
        formMessage.style.display = "block";
    }
    return false;
}

function resetFormMessage() {
    var formMessage = document.getElementById("formMessage");
    if (formMessage) {
        formMessage.textContent = "The form has been reset. Your information was cleared.";
        formMessage.style.display = "block";
    }
}
