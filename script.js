/* -----------------------------------------
   DARK MODE TOGGLE
------------------------------------------ */
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggle.textContent = document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
});

/* -----------------------------------------
   AUTO LOAD GALLERY IMAGES
------------------------------------------ */

const galleryImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];

const galleryContainer = document.getElementById("gallery-grid");

galleryImages.forEach(img => {
    const imageElement = document.createElement("img");
    imageElement.src = `assets/gallery/${img}`;
    imageElement.alt = "Gallery Image";

    imageElement.classList.add("fade-in");

    galleryContainer.appendChild(imageElement);
});

/* -----------------------------------------
   SMOOTH SCROLL (Navigation links)
------------------------------------------ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});

/* -----------------------------------------
   FADE-IN ON SCROLL
------------------------------------------ */

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3,
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
    });
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
