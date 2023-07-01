let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
const factDiv = document.getElementsByClassName('.number-fact');
let factTextP = document.getElementById("factTextP")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0;
    countEl.innerText = count;
}


function fact() {
    console.log("Fact called")
    console.log(factDiv)
    factTextP.innerText = factDiv.innerText;


    fetch("http://numbersapi.com/random/trivia", {
        headers: {
            'x-requested-with': 'text/plain'
        }
    })
        .then(response => response.text())
        .then(text => factDiv.innerText = text)
        .catch(e => console.log(e));

}

// This Code is for only the floating card in right bottom corner


const touchButton = document.querySelector(".float-text");
const card = document.querySelector(".float-card-info");
const close = document.querySelector(".gg-close-r");

touchButton.addEventListener("click", moveCard);
close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}


