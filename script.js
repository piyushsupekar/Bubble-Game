var timer = 60;
var score = 0;
var hitrn = 0;
var clutter = "";

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function resetscore() {
    score = 0;
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
    var containerWidth = document.querySelector("#pbtm").offsetWidth;
    var numberOfBubbles;

    // Adjust the number of bubbles based on the container width
    if (containerWidth < 600) { // Example breakpoint for mobile devices
        numberOfBubbles = 40; // Fewer bubbles for smaller screens
    } else {
        numberOfBubbles = 170; // More bubbles for larger screens
    }

    for (var i = 1; i <= numberOfBubbles; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble bluebubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    // Delay timer start by 5 seconds
    setTimeout(function () {
        var timerint = setInterval(function () {
            if (timer > 0) {
                timer--;
                document.querySelector("#timerValue").textContent = timer;
            } else {
                clearInterval(timerint);
                if (score >= 200) {
                    document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score}<br> !!!!!!!!! Nice Work Player !!!!!!`;
                    document.querySelector("#startButton").innerHTML = `Start New Game`
                } else if (score === 0) {
                    document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score}<br><br><br> !!!!! BETA WATCH POGO !!!! `;
                    document.querySelector("#startButton").innerHTML = `Start New Game`
                } else {
                    document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score}<br><br><br>!!!!! BOOOOOOO !!!!! NOOOOOOB !!! `;
                    document.querySelector("#startButton").innerHTML = `Start New Game`
                }
            }
        }, 1000); // Timer interval set to 1 second (1000 milliseconds)
    }, 1000); // Delay set to 1 second (1000 milliseconds)
}

function wrongBubble(bubble) {
    bubble.style.backgroundColor = "red";
    bubble.classList.add("shake-horizontal");
    bubble.style.transition = "all ease 0.5s";

    setTimeout(function () {
        bubble.style.backgroundColor = ""; // Reset color after some time (optional)
        bubble.classList.remove("shake-horizontal");
    }, 1000); // Adjust timing as needed
    decreaseScore();
}

function rightBubble(bluebubble) {
    bluebubble.style.backgroundColor = "white";
    setTimeout(function () {
        bluebubble.style.backgroundColor = ""; // Reset color after some time (optional)
    }, 1000); // Adjust timing as needed
    increaseScore();
}

function matching() {
    document.querySelector("#pbtm").addEventListener("click", function (event) {
        var clickedElement = event.target;
        if (clickedElement.classList.contains("bubble") || clickedElement.classList.contains("bluebubble")) {
            var bubbleValue = Number(clickedElement.textContent);
            if (bubbleValue === hitrn) {
                rightBubble(clickedElement);
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
document.querySelector("#startButton").addEventListener("click", function () {
    // Start the game when start button is clicked
    runTimer();
    getNewHit();
    makeBubble();
    matching();
    resetscore();
});
