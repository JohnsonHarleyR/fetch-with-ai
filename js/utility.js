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
// I asked Claude to help me with the code below, it wrote the code

// CoPilot: Please write javascript that generates a random hex code - (It added a # too. When I asked it to remove that, it couldn't do it so I just did it myself.)
function getRandomHexColor() {
    return Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

//CoPilot: Please write a javascript function that gets two random numbers between 100 and 500 and puts them into a string with an "x" in between
function getRandomDimensions() {
    const min = 100;
    const max = 500;
    const width = Math.floor(Math.random() * (max - min + 1)) + min;
    const height = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${width}x${height}`;
}

//CoPilot: Please write a function that takes this url string and replaces 'size' with the result of getRandomDimensions() and then replaces 'hex" with the result of getRandomHexColor() - (here is the string I gave it: `https://dummyjson.com/image/${size}/${hex}`)
function getRandomImageUrl() {
    const dimensions = getRandomDimensions();
    const hexColor = getRandomHexColor();
    return `https://dummyimage.com/${dimensions}/${hexColor}`;
}

//CoPilot: please write a function that generates a url by calling the function getRandomImageUrl(), fetches that url, then returns the property called 'url' from the results
async function fetchRandomImage() {
    const imageUrl = getRandomImageUrl();
    const response = await fetch(imageUrl);
    return response.url;
}