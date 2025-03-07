const giftText = document.getElementById("giftText");
const giftMessage = "you find a mysterious gift on the table... what do you do?";

let textIndex = 0;

function animateText() {
    if (textIndex < giftMessage.length) {
        giftText.innerHTML += giftMessage.charAt(textIndex);
        textIndex++;
        setTimeout(animateText, 100); // Adjust the speed of text animation here
    } else {
        // Fade-in the buttons after the text finishes animating
        const buttonsContainer = document.querySelector(".buttons");
        buttonsContainer.style.opacity = 1;
    }
}

// Start the text animation as soon as the page loads
window.onload = function() {
    giftText.innerHTML = ''; // Clear any pre-existing content
    animateText();

    // Hide the buttons initially
    const buttonsContainer = document.querySelector(".buttons");
    buttonsContainer.style.opacity = 0; 
    buttonsContainer.style.transition = "opacity 1s ease-in"; 
    // Trigger confetti when any button is clicked
    document.querySelectorAll('.choice-btn').forEach(button => {
        button.addEventListener('click', function() {
        triggerConfetti();
        });
    });


};

function goTo(page) {
    window.location.href = page;
}

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


