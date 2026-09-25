// Run when the page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio website loaded successfully!");

    // Section animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.15
    });

    sections.forEach(function (section) {
        observer.observe(section);
    });


    // Button click animation
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            button.style.transform = "scale(0.95)";

            setTimeout(function () {
                button.style.transform = "scale(1)";
            }, 150);

        });

    });


    // Resume button
    const resumeButton = document.getElementById("resumeButton");

    if (resumeButton) {

        resumeButton.addEventListener("click", function () {

            alert("Resume download will be available soon!");

        });

    }

});