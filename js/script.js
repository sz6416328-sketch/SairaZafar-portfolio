/* ==========================================
   PERSONAL PORTFOLIO JAVASCRIPT
========================================== */


document.addEventListener("DOMContentLoaded", () => {


    /* ==========================================
       ELEMENTS
    ========================================== */

    const themeToggle =
        document.getElementById("theme-toggle");

    const themeIcon =
        document.querySelector(".theme-icon");

    const menuToggle =
        document.getElementById("menu-toggle");

    const navbar =
        document.getElementById("navbar");

    const navLinks =
        document.querySelectorAll(".nav-link");


    /* ==========================================
       DARK / LIGHT MODE
    ========================================== */

    function updateThemeIcon() {

        const isDark =
            document.body.classList.contains("dark-mode");

        themeIcon.textContent =
            isDark ? "☀" : "☾";
    }


    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");


        const isDark =
            document.body.classList.contains("dark-mode");


        localStorage.setItem(
            "theme",
            isDark ? "dark" : "light"
        );


        updateThemeIcon();

    });


    /* ==========================================
       LOAD SAVED THEME
    ========================================== */

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

    }


    updateThemeIcon();


    /* ==========================================
       MOBILE MENU
    ========================================== */

    menuToggle.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuToggle.classList.toggle("active");

    });


    /* ==========================================
       CLOSE MOBILE MENU
       AFTER CLICKING A LINK
    ========================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            menuToggle.classList.remove("active");

        });

    });


    /* ==========================================
       ACTIVE NAVIGATION
    ========================================== */

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.forEach((item) => {

                item.classList.remove("active");

            });

            link.classList.add("active");

        });

    });
    // ==========================================
// ABOUT SECTION SCROLL ANIMATION
// ==========================================

const aboutSection = document.querySelector(".about-section");

const aboutItems = document.querySelectorAll(
    ".about-heading, .about-text, .info-card"
);

if (aboutSection) {

    aboutItems.forEach((item) => {

        item.style.opacity = "0";
        item.style.transform = "translateY(30px)";
        item.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

    });


    const aboutObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    aboutItems.forEach((item, index) => {

                        setTimeout(() => {

                            item.style.opacity = "1";
                            item.style.transform =
                                "translateY(0)";

                        }, index * 120);

                    });

                    aboutObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    aboutObserver.observe(aboutSection);

}

});
