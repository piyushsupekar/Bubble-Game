var timer = 60;
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



function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerValue").textContent = timer;

        }
        else {
            clearInterval(timerint);
            if (score >= 200) {
                document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score} <br> !!!!!!!!! Nice Work Brotherr !!!!!!`;

            }
            else if (score === 0) {

                document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score} <br><br><br> !!!!! BETA WATCH POGO !!!! `;
            }
            else {
                document.querySelector("#pbtm").innerHTML = `Game Over<br>Your Score is: ${score} <br><br><br>!!!!! BOOOOOOO !!!!! NOOOOOOB !!! `;

            }

        }
    }, 1000);
}

function matching() {
    document.querySelector("#pbtm").addEventListener("click", function (dets) {
        var print = Number(dets.target.textContent);
        if (print === hitrn) {
            increaseScore();
            getNewHit();
            makeBubble();
        }
    })
}
runTimer();
getNewHit();
makeBubble();
matching();