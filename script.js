/* ============================================
   SUPABASE v2 CLIENT INIT (UMD BUILD)
=============================================== */
const { createClient } = supabase;

const client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/* ============================================
   PRELOADER
=============================================== */
window.addEventListener("load", () => {
    document.getElementById("preloader").style.display = "none";
});

/* ============================================
   DARK MODE
=============================================== */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
}

/* ============================================
   LIGHTBOX
=============================================== */
function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

/* ============================================
   LOAD GALLERY IMAGES
=============================================== */
async function loadGallery() {
    const { data } = await client.storage.from("photos").list("", { limit: 200 });

    const box = document.getElementById("gallery");
    if (!box) return;

    box.innerHTML = "";

    data.forEach(file => {
        if (file.name === "certificates") return;

        const url = client.storage.from("photos").getPublicUrl(file.name).data.publicUrl;

        box.innerHTML += `
            <div class="gallery-item" onclick="openLightbox('${url}')">
                <img src="${url}">
            </div>`;
    });
}

loadGallery();

/* ============================================
   LOAD CERTIFICATES
=============================================== */
async function loadCertificates() {
    const { data } = await client.storage
        .from("photos")
        .list("certificates", { limit: 200 });

    const box = document.getElementById("certificates");
    if (!box) return;

    box.innerHTML = "";

    data.forEach(file => {
        const url = client.storage
            .from("photos")
            .getPublicUrl(`certificates/${file.name}`).data.publicUrl;

        box.innerHTML += `
            <div class="certificate-item">
                <img src="${url}">
            </div>`;
    });
}

loadCertificates();

/* ============================================
   LOAD ACHIEVEMENTS (from table)
=============================================== */
async function loadAchievements() {
    const { data } = await client.from("achievements").select("*");

    const box = document.getElementById("achievements");
    if (!box) return;

    box.innerHTML = data
        .map(a => `<p class="achievement-item">• ${a.text}</p>`)
        .join("");
}

loadAchievements();

/* ============================================
   STATS COUNTER
=============================================== */
function animateStats() {
    document.querySelectorAll(".stat-num").forEach(num => {
        let end = parseInt(num.dataset.count);
        let value = 0;

        const timer = setInterval(() => {
            value += Math.ceil(end / 50);

            if (value >= end) {
                value = end;
                clearInterval(timer);
            }

            num.textContent = value;
        }, 30);
    });
}

setTimeout(animateStats, 1000);


