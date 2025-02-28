// Code I am writing on my own for fun. I will use the ai too, I just like coding. I will put code that I used with AI to help me, too.
let getRandomIntInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let getRandomBool = () => Math.random() < 0.5;

let getRandomItemInList = (list) => list[Math.floor(Math.random() * list.length)];

function getRandomHex() {
    let letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    let newHex = "";
    for (let i = 0; i < 6; i++) {
        newHex += getRandomBool() == true ? `${getRandomIntInRange(0, 9)}` : getRandomItemInList(letters);
    }
    return newHex;
}

function getRandomPlaceholderImageUrl() {
    const minSize = 100;
    const maxSize = 500;

    let size = `${getRandomIntInRange(minSize, maxSize)}x${getRandomIntInRange(minSize, maxSize)}`;
    let hex = getRandomHex();
    return `https://dummyjson.com/image/${size}/${hex}`;
}

function fetchRandomPlaceholderImage(elementId) {
    let url = getRandomPlaceholderImageUrl();

    fetch(url)
    .then(res => res.url)
    .then(newUrl => document.getElementById(elementId).src = newUrl );
}

fetchRandomPlaceholderImage('placeholder-image');


// Okay, from here I will use Copilot to help me

