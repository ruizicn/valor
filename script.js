const navLinks = document.getElementById("nav-links");
const menuToggle = document.querySelector(".menu-toggle");
const currentPage = document.body.dataset.page;

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (
        (currentPage === "home" && href === "index.html") ||
        (currentPage === "works" && href === "works.html") ||
        (currentPage === "about" && href === "about.html")
    ) {
        link.classList.add("active");
    }
});

document.querySelectorAll("video[muted]").forEach((video) => {
    video.addEventListener("mouseenter", () => {
        video.play().catch(() => {});
    });

    video.addEventListener("mouseleave", () => {
        if (!video.classList.contains("hero-video")) {
            video.pause();
            video.currentTime = 0;
        }
    });
});

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
