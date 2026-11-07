
// ================================
// 1. MOBILE NAVIGATION
// ================================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");

// Create mobile menu button
const menuButton = document.createElement("button");

menuButton.classList.add("menu-button");
menuButton.textContent = "☰";
menuButton.setAttribute("aria-label", "Open navigation menu");
menuButton.setAttribute("aria-expanded", "false");

navbar.appendChild(menuButton);

// Toggle navigation menu
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close menu after clicking a link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-expanded", "false");
    });
});


// ================================
// 2. SCROLL TO TOP BUTTON
// ================================

const topButton = document.createElement("button");

topButton.textContent = "↑";
topButton.classList.add("top-button");
topButton.setAttribute("aria-label", "Scroll to top");

document.body.appendChild(topButton);

// Show button after scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

// Scroll to top when clicked
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ================================
// 3. SECTION REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".about, .skills, .projects, .contact"
);

revealElements.forEach(function (element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(function (element) {
    observer.observe(element);
});


// ================================
// 4. DYNAMIC COPYRIGHT YEAR
// ================================

const copyright = document.querySelector("footer p");

if (copyright) {
    copyright.textContent =
        `© ${new Date().getFullYear()} Laynee Wright. All rights reserved.`;
}
