/* SCROLL PROGRESS BAR */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / height) * 100;
    document.getElementById("scroll-progress").style.width = progress + "%";
});

/* DARK MODE */
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* TYPING EFFECT */
const typingElement = document.getElementById("typing");
const typingText = "Multi-NDT PCN Level II Technician";
let typingIndex = 0;

function typingEffect() {
    typingElement.textContent = typingText.slice(0, typingIndex++);
    if (typingIndex <= typingText.length) {
        setTimeout(typingEffect, 70);
    }
}
typingEffect();

/* COUNTERS */
const counters = document.querySelectorAll(".counter");
let started = false;

window.addEventListener("scroll", () => {
    const pos = document.querySelector(".counter-row").getBoundingClientRect().top;
    if (pos < window.innerHeight - 100 && !started) {
        started = true;
        counters.forEach(counter => {
            let target = +counter.dataset.target;
            let current = 0;
            function update() {
                if (current < target) {
                    current += target / 70;
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            }
            update();
        });
    }
});

/* PREMIUM GALLERY LOADER */
const galleryImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const galleryScroll = document.getElementById("gallery-scroll");

galleryImages.forEach(name => {
    const img = document.createElement("img");
    img.src = `assets/gallery/${name}`;
    img.onclick = () => openLightbox(img.src);
    galleryScroll.appendChild(img);
});

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = "flex";
}

lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});
