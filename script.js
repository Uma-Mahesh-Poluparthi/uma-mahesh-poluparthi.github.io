/* Scroll Progress Bar */
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let progress = (scrollTop / height) * 100;
    document.getElementById("scroll-progress").style.width = progress + "%";
});

/* Auto Typing */
const typing = document.getElementById("typing");
const text = "Multi-NDT PCN Level II Technician";
let index = 0;

function typeEffect() {
    typing.innerHTML = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(typeEffect, 80);
    }
}
typeEffect();

/* Counters */
const counters = document.querySelectorAll(".counter");

function startCounters() {
    counters.forEach(counter => {
        counter.innerText = "0";
        let updateCounter = () => {
            let target = +counter.getAttribute("data-target");
            let current = +counter.innerText;
            let increment = target / 80;
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}
setTimeout(startCounters, 1000);

/* Gallery Loader */
const galleryImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
const gallery = document.getElementById("gallery");

galleryImages.forEach(name => {
    let img = document.createElement("img");
    img.src = `assets/gallery/${name}`;
    img.classList.add("gallery-img");
    img.onclick = () => openLightbox(img.src);
    gallery.appendChild(img);
});

/* Lightbox */
function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

document.getElementById("lightbox").onclick = () => {
    document.getElementById("lightbox").style.display = "none";
};
