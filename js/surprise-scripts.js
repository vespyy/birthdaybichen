const surpriseText = document.getElementById("surpriseText");
const surpriseDesc = document.getElementById("surpriseDesc");

const surpriseMessage = "you tear open the gift... but wait... what's that sound? 😳";
const surpriseDescription = "POOF! a cloud of glitter explodes everywhere! you're now covered in sparkles. your friends laugh as you try to clean up.";

let textIndex = 0;

function animateText() {
    if (textIndex < surpriseMessage.length) {
        surpriseText.innerHTML += surpriseMessage.charAt(textIndex);
        textIndex++;
        setTimeout(animateText, 100); // Adjust speed here
    } else {
        textIndex = 0;
        animateDescription(); // Start animating the description after the main text
    }
}

function animateDescription() {
    if (textIndex < surpriseDescription.length) {
        surpriseDesc.innerHTML += surpriseDescription.charAt(textIndex);
        textIndex++;
        setTimeout(animateDescription, 80); // Adjust speed here
    } else {
        // Fade-in the buttons after text finishes animating
        const buttonsContainer = document.querySelector(".buttons");
        buttonsContainer.style.opacity = 1;
    }
}

// Start text animation as soon as the page loads
window.onload = function() {
    surpriseText.innerHTML = ''; // Clear any pre-existing content
    surpriseDesc.innerHTML = '';
    animateText();

    // Hide buttons initially
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


