const coin = document.querySelector("#coin");
const button = document.querySelector(".flip");
const status = document.querySelector("#status");
const heads = document.querySelector("#headCount");
const tails = document.querySelector("#tailCount");

let headCount = 0;
let tailCount = 0;

function processResult(result) {
    if (result === 'heads') {
        headCount++;
        heads.innerHTML = headCount;
    } else {
        tailCount++;
        tails.innerHTML = tailCount;
    }
    status.innerText = result.toUpperCase();
}

function flipCoin() {
    const random = Math.random();
    const result = random < 0.5 ? 'heads' : 'tails';
    
    // Reset animation by removing class and re-adding it
    coin.classList.remove('animate-heads', 'animate-tails');
    
    setTimeout(() => {
        coin.setAttribute('class', 'animate-' + result);

        setTimeout(() => {
            processResult(result);
        }, 2900); // Assuming 3 seconds animation duration
    }, 100);
}

button.addEventListener("click", flipCoin);
