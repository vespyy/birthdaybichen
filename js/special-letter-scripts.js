// Check if the current page is special-letter.html
if (window.location.pathname.includes("special-letter.html")) {
    // Elements
    const blackout = document.getElementById("blackout");
    const letterElement = document.getElementById("letter");
    const buttonsContainer = document.getElementById("letter-buttons-container"); // New button container

    // Letter content (your message)
    const letterText = `
        today is...
        as beautiful as any other day,
        but for you, it's different.
        
        another year has passed,
        in just the blink of an eye.
        
        yet, do you know...?
        today isn't just another day,
        it's yours.
        
        that's why,
        let's make it a celebration to remember!
        let me share a piece of happiness with you!
        
        i created this as a gift-
        not just for your birthday,
        but to remind you of something important.
        
        thank you for being here.
        thank you for the moments we've shared.
        thank you for the memories we've made.
        thank you for everything.
        
        i wish you all the best,
        for today and always.
        may your days be filled with ease,
        and may your dreams take flight.
        
        remember your ambitions.
        you are like a free bird,
        a duck!
        soaring across the endless sky.
        and remember, it's okay to fall.
        because you will rise again!
        
        a new chapter of your life begins now.
        it's unknown, but exciting.
        and no matter where the journey takes you,
        don't be afraid!
        because you are never alone.
        
        this year will be even better,
        and i hope you find happiness in every moment.
        so smile,
        embrace today,
        and make it a memory to cherish forever.
        
        and one last time,
        happy birthday, bichen!






        
    `;

    let currentLetterIndex = 0;

    // Function to animate letter content
    function animateLetter() {
        if (currentLetterIndex < letterText.length) {
            // Add character to the letter element
            letterElement.innerHTML += letterText.charAt(currentLetterIndex);
            currentLetterIndex++;
            console.log(`Adding character: ${letterText.charAt(currentLetterIndex)}`); // Debugging line
            setTimeout(animateLetter, 50); // Adjust the speed of the typing effect
        } else {
            // Once the letter finishes typing, fade in the buttons container
            buttonsContainer.style.display = 'block'; // Ensure the button container is displayed
            setTimeout(() => {
                buttonsContainer.style.opacity = 1; // Show the button container with a smooth transition
            }, 100); // Slight delay to ensure display change is applied
        }
    }

    // Show the blackout effect and start the letter reveal
    function startLetterReveal() {
        // Show the blackout effect (only on this page)
        blackout.style.display = "block"; // Make sure the blackout is visible
        blackout.style.opacity = 1;

        // After blackout, reveal the letter
        setTimeout(() => {
            blackout.style.opacity = 0; // Fade out the blackout
            setTimeout(() => {
                blackout.style.display = "none"; // Hide blackout completely
                letterElement.style.opacity = 1; // Make letter visible
                animateLetter(); // Start animating the letter text
            }, 2000); // Wait for 2 seconds before showing the letter
        }, 2000); // Wait for 2 seconds before fading out
    }

    // Trigger the letter reveal when the page loads
    window.onload = startLetterReveal;
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

// Function to navigate to a different page
function goTo(page) {
    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function() {
    const letterContent = document.getElementById("letter");
    const restartButton = document.getElementById("letter-buttons-container");

    // Function to scroll the letter content
    function scrollLetter() {
        let scrollAmount = 0;
        const scrollInterval = setInterval(function() {
            letterContent.scrollTop += 1;
            scrollAmount += 1;
            if (scrollAmount >= letterContent.scrollHeight - letterContent.clientHeight) {
                clearInterval(scrollInterval);
                restartButton.style.display = 'block'; // Ensure the button container is displayed
                setTimeout(() => {
                    restartButton.style.opacity = 1; // Show the button container with a smooth transition
                }, 100); // Slight delay to ensure display change is applied
            }
        }, 50); // Adjust the speed as needed
    }

    // Start scrolling after a short delay
    setTimeout(scrollLetter, 1000);
});











