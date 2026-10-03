// Mobile menu

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


// Smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Simple image click effect

document.querySelectorAll(".photo img").forEach(function (image) {

    image.addEventListener("click", function () {

        const fullImage = document.createElement("div");

        fullImage.className = "image-viewer";

        fullImage.innerHTML = `
            <span class="close-image">&times;</span>
            <img src="${this.src}" alt="${this.alt}">
        `;

        document.body.appendChild(fullImage);


        fullImage.addEventListener("click", function () {
            fullImage.remove();
        });

    });

});
