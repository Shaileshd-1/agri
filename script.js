// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let slides = document.querySelectorAll(".slide");
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) { slideIndex = 1; }
//     slides[slideIndex - 1].style.display = "block";
//     setTimeout(showSlides, 10000);
// }


// function changeSlide(n) {
//     slideIndex += n + 1;
//     showSlides();
// }

// function toggleMenu() {
//     let menu = document.querySelector(".nav-links");
//     menu.style.display = menu.style.display === "block" ? "none" : "block";
// }
// Toggle Mobile Menu
// function toggleMenu() {
//     document.querySelector(".nav-links").classList.toggle("active");
// }

// Enable Dropdowns on Click for Mobile
// document.querySelectorAll(".dropdown > a").forEach((dropdown) => {
//     dropdown.addEventListener("click", function (e) {
//         if (window.innerWidth <= 768) {
//             e.preventDefault();
//             this.parentElement.querySelector(".dropdown-menu").classList.toggle("active");
//         }
//     });
// });
// document.getElementById("college-logo").addEventListener("click", function(event) {
//     event.preventDefault();
//     location.reload();
// });
// document.getElementById("homo").addEventListener("click", function(event) {
//     event.preventDefault();
//     location.reload();
// });

// document.getElementById("contact-link").addEventListener("click", function (e) {
//     e.preventDefault(); // Prevent default anchor behavior
//     document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
// });


let slideIndex = 0;
let slideInterval; // Store the setTimeout reference

showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";

    slideInterval = setTimeout(showSlides, 10000); // Automatically change slides every 10 sec
}

// Function to manually change slides when clicking arrows
function changeSlide(n) {
    clearTimeout(slideInterval); // Stop auto slide when manually navigating
    let slides = document.querySelectorAll(".slide");

    slideIndex += n;
    if (slideIndex < 1) { slideIndex = slides.length; }
    if (slideIndex > slides.length) { slideIndex = 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";

    slideInterval = setTimeout(showSlides, 10000); // Restart auto-sliding
}

// Toggle Mobile Menu
// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".dropdown > a").forEach((link) => {
      link.addEventListener("click", function (e) {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          const submenu = this.parentElement.querySelector(".dropdown-menu");
          if (submenu) {
            submenu.classList.toggle("active");
          }
        }
      });
    });
  });
// Reload page when clicking logo or home link
document.getElementById("college-logo").addEventListener("click", function(event) {
    event.preventDefault();
    location.reload();
});

document.getElementById("homo").addEventListener("click", function(event) {
    event.preventDefault();
    location.reload();
});

// Smooth scroll to footer when clicking "Contact"
document.getElementById("contact-link").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("footer").scrollIntoView({ behavior: "smooth" });
});


// Function to scroll the gallery left or right

// agri

 function goToPrincipalPage() {
    window.location.href = "principal.html";  // Redirect to principal.html
  }


