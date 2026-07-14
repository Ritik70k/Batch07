const quote = [
                "Success comes from consistency.",
                "Practice makes perfect.",
                "Believe in your self.",
                "Never stop learning.",
                "Dream big work hard.",
                "Stop wishing start doing.",
                "Hard work pays off.",
            ];

const btn = document.querySelector("#btn");
const span = document.querySelector("span");

btn.addEventListener("click", ()=>{
    let random = Math.floor(Math.random()*quote.length);
    span.textContent = `-> ${quote[random]}`;
})