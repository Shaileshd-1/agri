document.addEventListener("DOMContentLoaded", function () {
    // Select all gallery images dynamically
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const galleryImages = Array.from(galleryItems).map(img => img.src);
    let currentImageIndex = 0;

    // Open fullscreen with the selected image
    function openFullscreen(index) {
        currentImageIndex = index;
        document.getElementById("fullscreenImage").src = galleryImages[index];
        document.getElementById("imageCounter").textContent = `${index + 1} / ${galleryImages.length}`;
        document.getElementById("fullscreenOverlay").style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevent scrolling
    }

    // Close fullscreen
    function closeFullscreen() {
        document.getElementById("fullscreenOverlay").style.display = "none";
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    // Navigate through images in fullscreen mode
    function navigateImage(direction) {
        currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
        document.getElementById("fullscreenImage").src = galleryImages[currentImageIndex];
        document.getElementById("imageCounter").textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
    }

    // Attach event listeners to gallery images
    galleryItems.forEach((img, index) => {
        img.addEventListener("click", () => openFullscreen(index));
    });

    // Ensure the close button works
    document.querySelector(".close-btn").addEventListener("click", closeFullscreen);

    // Ensure navigation arrows in fullscreen work
    document.querySelector(".prev-arrow").addEventListener("click", () => navigateImage(-1));
    document.querySelector(".next-arrow").addEventListener("click", () => navigateImage(1));

    // Close fullscreen when clicking outside the image
    document.getElementById("fullscreenOverlay").addEventListener("click", (event) => {
        if (event.target === document.getElementById("fullscreenOverlay")) {
            closeFullscreen();
        }
    });

    // Keyboard navigation for fullscreen mode
    document.addEventListener("keydown", (event) => {
        if (document.getElementById("fullscreenOverlay").style.display === "flex") {
            if (event.key === "ArrowLeft") navigateImage(-1);
            if (event.key === "ArrowRight") navigateImage(1);
            if (event.key === "Escape") closeFullscreen();
        }
    });

    // Horizontal scrolling for gallery
    const gallery = document.querySelector(".gallery-container");
    function scrollGallery(direction) {
        gallery.scrollBy({ left: direction * 300, behavior: "smooth" });
    }

    document.querySelector(".left-arrow").addEventListener("click", () => scrollGallery(-1));
    document.querySelector(".right-arrow").addEventListener("click", () => scrollGallery(1));
});
// NAV bar

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
let lastScrollTop = 0;

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Hide navbar on scroll down, show on scroll up
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-60px"; // Hide navbar
    } else {
        navbar.style.top = "0"; // Show navbar
    }
    lastScrollTop = currentScroll;
});
