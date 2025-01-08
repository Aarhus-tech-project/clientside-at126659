const capatchaText = document.getElementById("capatchaText");
const num1 = Math.floor(Math.random() * 9) + 1;
const num2 = Math.floor(Math.random() * 9) + 1;

capatchaText.textContent = num1 + " + " + num2 + " =";

function capatchaSubmit() {
    const answer = num1 + num2;
    if (parseInt(document.getElementById("answer").value) === answer) {
        alert("You are not a robot!");
    } else {
        alert("You are a robot!");
    }
}