/* ==========================
   LOADER FADE-OUT
========================== */
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => (loader.style.display = "none"), 500);
        }, 300);
    }
});

/* ==========================
   STATS COUNTER
========================== */
let counters = document.querySelectorAll(".count");
let counterStarted = false;

function runCounters() {
    if (counterStarted) return;

    counters.forEach(counter => {
        let target = +counter.dataset.val;
        let current = 0;
        let speed = target / 60;

        let interval = setInterval(() => {
            current += speed;
            counter.textContent = Math.floor(current);

            if (current >= target) {
                counter.textContent = target;
                clearInterval(interval);
            }
        }, 30);
    });

    counterStarted = true;
}

window.addEventListener("scroll", runCounters);

/* ==========================
   LIGHTBOX VIEWER
========================== */
const lightbox = document.getElementById("lightbox-viewer");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("lightbox-close");

document.querySelectorAll(".lightbox").forEach(img => {
    img.addEventListener("click", () => {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImg.src = "";
    });
}

/* ==========================
   PDF VIEWER
========================== */
function openPDF(file) {
    const viewer = document.getElementById("pdf-viewer");
    const frame = document.getElementById("pdf-frame");
    if (viewer && frame) {
        frame.src = file;
        viewer.style.display = "flex";
    }
}
window.openPDF = openPDF;

const pdfClose = document.getElementById("pdf-close");
if (pdfClose) {
    pdfClose.addEventListener("click", () => {
        document.getElementById("pdf-viewer").style.display = "none";
        document.getElementById("pdf-frame").src = "";
    });
}

/* ==========================
   PROJECT ACCORDION
========================== */
document.querySelectorAll(".project-item").forEach(item => {
    const header = item.querySelector(".project-header");

    header.addEventListener("click", () => {
        document.querySelectorAll(".project-item.active").forEach(openItem => {
            if (openItem !== item) openItem.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});

/* ==========================
   FEEDBACK POPUP + DELAY REDIRECT
========================== */
const feedbackForm = document.getElementById("feedbackForm");
const popup = document.getElementById("popup");

if (feedbackForm) {
    feedbackForm.addEventListener("submit", e => {
        e.preventDefault();

        if (popup) popup.classList.add("show");

        // Allow popup to show, then submit
        setTimeout(() => {
            feedbackForm.submit();
        }, 1500);
    });
}

/* ==========================
   TYPING EFFECT
========================== */
const typingTexts = [
    "Multi-NDT Specialist",
    "PCN Level II Technician",
    "RTFI | MT | PT | Inspection",
    "Industrial Quality Control"
];

let tIndex = 0;
let cIndex = 0;
const typingElement = document.getElementById("typing");

function typingEffect() {
    if (!typingElement) return;

    let currentText = typingTexts[tIndex];
    typingElement.textContent = currentText.substring(0, cIndex);

    if (cIndex < currentText.length) {
        cIndex++;
    } else {
        setTimeout(() => {
            cIndex = 0;
            tIndex = (tIndex + 1) % typingTexts.length;
        }, 900);
    }

    setTimeout(typingEffect, 110);
}
typingEffect();

/* ==========================
   FADE IN ON SCROLL
========================== */
const fadeItems = document.querySelectorAll(".fade");

function fadeInOnScroll() {
    fadeItems.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.style.animationPlayState = "running";
        }
    });
}

window.addEventListener("scroll", fadeInOnScroll);
window.addEventListener("load", fadeInOnScroll);

/* ==========================
   CERTIFICATE CAROUSEL
========================== */
const certCarousel = document.getElementById("certCarousel");
const certNext = document.getElementById("certNext");
const certPrev = document.getElementById("certPrev");

if (certNext) {
    certNext.addEventListener("click", () => {
        certCarousel.scrollBy({ left: 220, behavior: "smooth" });
    });
}

if (certPrev) {
    certPrev.addEventListener("click", () => {
        certCarousel.scrollBy({ left: -220, behavior: "smooth" });
    });
}

/* ==========================
   HIRE ME → SCROLL TO CONTACT
========================== */
function scrollToContact() {
    const target = document.querySelector("#contact");
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}
window.scrollToContact = scrollToContact;

/* ==========================
   OPEN CV INLINE VIEW
========================== */
function openCV() {
    const cvSection = document.getElementById("cv");
    if (cvSection) cvSection.scrollIntoView({ behavior: "smooth" });
}
window.openCV = openCV;
