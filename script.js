
// ==================================
// MOBILE NAVIGATION
// ==================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// Close navigation after selecting a menu item

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// ==================================
// AUTOMATIC FOOTER YEAR
// ==================================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ==================================
// CONTACT FORM
// ==================================

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check whether all fields are filled

    if (!name || !email || !message) {

        formStatus.textContent = "Please fill in all fields.";

        return;

    }


    // Validate email address

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formStatus.textContent = "Please enter a valid email address.";

        return;

    }


    // Prepare email details

    const recipient = "zoheb9396@gmail.com";

    const subject = encodeURIComponent(
        "Portfolio Contact - Message from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    // Open the visitor's default email application

    formStatus.textContent = "Opening your email application...";

    window.location.href =
        `mailto:${recipient}?subject=${subject}&body=${body}`;

});
