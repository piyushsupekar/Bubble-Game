var timer = 20;
var score = 0;
var hitrn = 0;
var clutter = "";

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function decreaseScore() {
    score -= 5;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    clutter = ""; 
    for (var i = 1; i <= 184; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;
        } else {
            clearInterval(timerint);
            if (score >= 200) {
                document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score}<br> !!!!!!!!! Nice Work Player !!!!!!`;
            } else if (score === 0) {
                document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score}<br><br><br> !!!!! BETA WATCH POGO !!!! `;
            } else {
                document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score}<br><br><br>!!!!! BOOOOOOO !!!!! NOOOOOOB !!! `;
            }
        }
    }, 500);
}

function wrongBubble(bubble) {
    bubble.style.backgroundColor = "red";
    setTimeout(function () {
        bubble.style.backgroundColor = ""; // Reset color after some time (optional)
    }, 1000); // Adjust timing as needed
    decreaseScore();
}

function matching() {
    document.querySelector("#pbtm").addEventListener("click", function (event) {
        var clickedElement = event.target;
        if (clickedElement.classList.contains("bubble")) {
            var bubbleValue = Number(clickedElement.textContent);
            if (bubbleValue === hitrn) {
                increaseScore();
                getNewHit();
                makeBubble();
            } else {
                wrongBubble(clickedElement);
            }
        }
    });
}

// Initial setup
runTimer();
getNewHit();
makeBubble();
matching();
