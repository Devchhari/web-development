
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const words = [
    "Web Developer",
    "Programmer",
    "Student",
    "Creative Coder"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const word = words[wordIndex];

    if (deleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typing.textContent = word.substring(0, charIndex);

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === word.length) {
        deleting = true;
        speed = 1000;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
