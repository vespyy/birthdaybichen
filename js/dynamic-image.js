document.addEventListener("DOMContentLoaded", function() {
    // Get the current page filename
    let page = window.location.pathname.split("/").pop();
    console.log("Current page:", page);

    // Get the image element
    let imageElement = document.getElementById("dynamicImage");
    if (!imageElement) {
        console.error("Image element with id 'dynamicImage' not found.");
        return;
    }

    // Define different images for each page
    let images = {
        "choices.html": "images/birthday-cake.jpg",
        "special-letter.html": "images/letter.jpg",
        "mysterious-birthday.html": "images/mystery-gift.jpg",
        "surprise-birthday.html": "images/surprise.jpg"
    };

    let defaultImage = "images/happy-birthday.jpg";

    // If the page has a matching image, update the src
    if (images[page]) {
        console.log("Setting image src to:", images[page]);
        imageElement.src = images[page];
    } else {
        console.log("Setting image src to default:", defaultImage);
        imageElement.src = defaultImage;
    }
});
