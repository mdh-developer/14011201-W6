//Week 6

//Challeng 6


const myAge = 19;

document.querySelector(".check").addEventListener("click", function () {
    const guessedNumber = Number(document.querySelector(".guess").value);

    let score = Number(document.querySelector(".score").textContent)

    document.querySelector(".again").addEventListener("click", function () {
        location.reload("age", "message", "score");
    })

    if (!guessedNumber) {
        document.querySelector(".message").textContent = "No number !"
    } else if (guessedNumber < myAge) {
        document.querySelector(".score").textContent = --score;
        if (score === 0) {
            document.querySelector(".message").textContent = " Game over !!";
            document.querySelector("body").style.backgroundColor = "#bf1515";
        } else {
            document.querySelector(".message").textContent = " Your guess less than my age";
        }
    } else if (guessedNumber > myAge) {
        document.querySelector(".score").textContent = --score;
        if (score === 0) {
            document.querySelector(".message").textContent = "Game over !";
            document.querySelector("body").style.backgroundColor = "#bf1515";
        } else {
            document.querySelector(".message").textContent = " Your guess more than my age";
        }
    } else if (guessedNumber === myAge) {
        document.querySelector(".message").textContent = " You win !";
        document.querySelector(".age").textContent = 19;
        document.querySelector("body").style.backgroundColor = "#60b347";
    }
})