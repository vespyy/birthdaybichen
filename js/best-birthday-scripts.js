const bestBirthdayText = document.getElementById("bestBirthdayText");
const bestBirthdayDesc = document.getElementById("bestBirthdayDesc");

const bestBirthdayMessage = "congratulations! you had the best birthday ever!";
const bestBirthdayDescription = "your friends loved the cake, the decorations were amazing, and the party was a huge success.";

let textIndex = 0;

function animateText() {
    if (textIndex < bestBirthdayMessage.length) {
        bestBirthdayText.innerHTML += bestBirthdayMessage.charAt(textIndex);
        textIndex++;
        setTimeout(animateText, 100); // Adjust speed here
    } else {
        textIndex = 0;
        animateDescription(); // Start animating the description after the main text
    }
}

function animateDescription() {
    if (textIndex < bestBirthdayDescription.length) {
        bestBirthdayDesc.innerHTML += bestBirthdayDescription.charAt(textIndex);
        textIndex++;
        setTimeout(animateDescription, 80); // Adjust speed here
    } else {
        // Fade-in the button after text finishes animating
        const buttonsContainer = document.querySelector(".buttons");
        buttonsContainer.style.opacity = 1;
    }
}

// Start text animation as soon as the page loads
window.onload = function() {
    bestBirthdayText.innerHTML = ''; // Clear any pre-existing content
    bestBirthdayDesc.innerHTML = '';
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


