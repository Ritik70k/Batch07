const right = document.querySelector("#right");
const wrong = document.querySelector("#wrong");
const numInput = document.querySelector("input");
const checkBtn = document.querySelector("#check");
const resetBtn = document.querySelector("#reset");
const you = document.querySelector("#you");
const comp = document.querySelector("#comp");
const resScore = document.querySelector(".res-score");



let val = null;
numInput.addEventListener("input", (e) => {
    val = Number(e.target.value);

})
checkBtn.addEventListener("click", () => {
    const random = Math.ceil(Math.random() * 6);
    if (val > 6) {
        wrong.style.display = "flex"
        wrong.textContent = "Number should be less than or equal to 6";
    } else if (val === null || wrong.style.display === "flex" || right.style.display === "flex") {
        return;
    }
    else if (val === random) {
        right.style.display = "flex"
        resScore.style.display = "flex"
        resScore.style.color = "green";
        you.textContent = val;
        comp.textContent = random;
        numInput.value = "";
        val = null;

    }
    else {
        wrong.style.display = "flex"
        resScore.style.display = "flex"
        resScore.style.color = "red";
        you.textContent = val;
        comp.textContent = random;
        numInput.value = "";
        val = null;
    }
});

resetBtn.addEventListener("click", () => {

    if(numInput.value){
        numInput.value = "";
    }
    right.style.display = "none";
    wrong.style.display = "none"
    resScore.style.display = "none"
    you.textContent = "";
    comp.textContent = "";


})