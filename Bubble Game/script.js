var timer = 3;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);

    document.querySelector("#hitval").textContent = hitrn;
}
function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 207; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}


function matching() {
    document.querySelector("#pbtm").addEventListener("click", function score(dets) {
        var print = Number(dets.target.textContent);
        if (print === hitrn) {
            increaseScore();
            getNewHit();
            makeBubble();
        }
    })
}
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;

        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`, `<h2>Your Score is: ${score}</h2>`;

        }
    }, 1000);
}


runTimer();
getNewHit();
makeBubble();
matching();