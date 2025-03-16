console.log("✅ script.js is loaded!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM Loaded");

    // Initialize Typed.js animation
    new Typed(".typed-text", {
        strings: ["Tech Enthusiast", "Future Data Analyst", "Étudiante en Managament des Systèmes d'Information"],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true
    });
});
