document.addEventListener("DOMContentLoaded", function () {

    /*
     * Scroll reveal animation
     */

    const elements = document.querySelectorAll(
        ".section, .stats, .contact-section"
    );


    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.08
        }
    );


    elements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /*
     * Smooth navigation
     */

    const navigationLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    navigationLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");

                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(
                            targetId
                        );

                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }

            }
        );

    });

});