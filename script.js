/* -----------------------------------------------------
   SCROLL PROGRESS BAR
------------------------------------------------------ */
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / totalHeight) * 100;
    document.getElementById("scroll-progress").style.width = progress + "%";
});

/* -----------------------------------------------------
   COUNTER ANIMATION
------------------------------------------------------ */
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounters() {
    counters.forEach(counter => {
        counter.innerText = "0";
        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");
            const current = +counter.innerText;
            const increment = target / 80; // smooth speed

            if (current < target) {
                counter.innerText = `${Math.ceil(current + increment)}`;
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

window.addEventListener("scroll", () => {
    const counterSection = document.querySelector(".counter-row");
    const position = counterSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 150 && !counterStarted) {
        counterStarted = true;
        startCounters();
    }
});

/* -----------------------------------------------------
   LIGHTBOX FOR GALLERY
------------------------------------------------------ */
function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
