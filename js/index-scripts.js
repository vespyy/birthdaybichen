const birthdayMessage = document.getElementById("birthdayMessage");
const startBtn = document.getElementById("startBtn");
const message = "happy birthday, bichen!";
let index = 0;

function animateText() {
    if (index < message.length) {
        birthdayMessage.innerHTML += message.charAt(index);
        index++;
        setTimeout(animateText, 100); // Adjust this value for speed
    } else {
        startBtn.style.display = "inline"; // Show the button once the message is done
    }
}

// Start the animation as soon as the page loads
animateText();

function startAdventure() {
    window.location.href = "choices.html";
}
function customBalloonConfetti() {
    const myCanvas = document.createElement("canvas");
    document.body.appendChild(myCanvas);
    const ctx = myCanvas.getContext("2d");

    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    let balloons = [];

    // Create balloon objects with random properties
    for (let i = 0; i < 20; i++) {
        balloons.push({
            x: Math.random() * myCanvas.width, // Random horizontal position
            y: myCanvas.height + Math.random() * 100, // Start below the screen
            speed: Math.random() * 2 + 1, // Random float speed
            color: `hsl(${Math.random() * 360}, 100%, 50%)` // Random bright colors
        });
    }

    function drawBalloon(balloon) {
        // Draw balloon body (oval shape)
        ctx.beginPath();
        ctx.ellipse(balloon.x, balloon.y, 15, 20, 0, 0, Math.PI * 2);
        ctx.fillStyle = balloon.color;
        ctx.fill();
        ctx.closePath();

        // Draw string
        ctx.beginPath();
        ctx.moveTo(balloon.x, balloon.y + 20);
        ctx.lineTo(balloon.x, balloon.y + 40);
        ctx.strokeStyle = balloon.color;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    function animateBalloons() {
        ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

        balloons.forEach(balloon => {
            balloon.y -= balloon.speed; // Move balloon up

            drawBalloon(balloon);
        });

        // Keep animating until all balloons are off-screen
        if (balloons.some(balloon => balloon.y > -50)) {
            requestAnimationFrame(animateBalloons);
        } else {
            document.body.removeChild(myCanvas); // Remove canvas when animation is done
        }
    }

    animateBalloons(); // Start animation
}

// Trigger custom balloon confetti on page load
window.onload = function () {
    setTimeout(customBalloonConfetti, 500);
};

// Function to trigger confetti
function triggerConfetti() {
    // Trigger the confetti effect
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff0000', '#ff7300', '#fffa00', '#48c6ef', '#3cff00', '#8a2be2', '#ff69b4']
    });

    // Add pulse effect to all buttons
    document.querySelectorAll('.choice-btn').forEach(button => {
        button.classList.add('confetti-active'); // Add pulse effect class
        setTimeout(() => {
            button.classList.remove('confetti-active'); // Remove pulse effect after animation
        }, 600); // Reset after animation duration
    });
}






