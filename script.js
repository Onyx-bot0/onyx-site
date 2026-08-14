```javascript
/* =========================================
   ONYX WEBSITE
   ========================================= */


/* =========================================
   PARTÍCULAS
   ========================================= */

if (typeof tsParticles !== "undefined") {

    tsParticles.load("particles", {

        particles: {

            number: {

                value: 70,

                density: {

                    enable: true,

                    area: 900

                }

            },


            color: {

                value: "#ffffff"

            },


            opacity: {

                value: 0.35,

                random: true

            },


            size: {

                value: {

                    min: 1,

                    max: 3

                }

            },


            move: {

                enable: true,

                speed: 0.6,

                direction: "none",

                random: true,

                straight: false,

                outModes: {

                    default: "out"

                }

            },


            links: {

                enable: true,

                distance: 140,

                color: "#ffffff",

                opacity: 0.08,

                width: 1

            }

        },


        interactivity: {

            events: {

                onHover: {

                    enable: true,

                    mode: "grab"

                },

                resize: true

            },


            modes: {

                grab: {

                    distance: 160,

                    links: {

                        opacity: 0.2

                    }

                }

            }

        },


        detectRetina: true

    });

}



/* =========================================
   CURSOR
   ========================================= */

const cursor =
    document.querySelector(".cursor");


if (cursor) {

    document.addEventListener(
        "mousemove",
        function(event) {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";

        }
    );


    const interactiveElements =
        document.querySelectorAll(
            "a, button, summary, .card, .command"
        );


    interactiveElements.forEach(
        function(element) {

            element.addEventListener(
                "mouseenter",
                function() {

                    cursor.style.width =
                        "30px";

                    cursor.style.height =
                        "30px";

                }
            );


            element.addEventListener(
                "mouseleave",
                function() {

                    cursor.style.width =
                        "18px";

                    cursor.style.height =
                        "18px";

                }
            );

        }
    );

}



/* =========================================
   ANIMAÇÕES AO ROLAR
   ========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {

            threshold: 0.12

        }

    );


revealElements.forEach(
    function(element) {

        revealObserver.observe(element);

    }
);



/* =========================================
   CONTADORES
   ========================================= */

const counters =
    document.querySelectorAll(
        ".stat h3[data-target]"
    );


function animateCounter(element) {

    const target =
        Number(
            element.getAttribute(
                "data-target"
            )
        );


    let current = 0;


    const duration = 1400;


    const startTime =
        performance.now();


    function updateCounter(
        currentTime
    ) {

        const progress =
            Math.min(
                (
                    currentTime -
                    startTime
                ) / duration,
                1
            );


        const eased =
            1 -
            Math.pow(
                1 - progress,
                3
            );


        current =
            Math.floor(
                eased * target
            );


        element.textContent =
            current + "+";


        if (progress < 1) {

            requestAnimationFrame(
                updateCounter
            );

        }

    }


    requestAnimationFrame(
        updateCounter
    );

}



const counterObserver =
    new IntersectionObserver(

        function(entries) {

            entries.forEach(
                function(entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        animateCounter(
                            entry.target
                        );

                        counterObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {

            threshold: 0.5

        }

    );


counters.forEach(
    function(counter) {

        counterObserver.observe(
            counter
        );

    }
);



/* =========================================
   FAQ
   ========================================= */

const faqItems =
    document.querySelectorAll(
        "details"
    );


faqItems.forEach(
    function(item) {

        item.addEventListener(
            "toggle",
            function() {

                if (item.open) {

                    faqItems.forEach(
                        function(otherItem) {

                            if (
                                otherItem !== item
                            ) {

                                otherItem.removeAttribute(
                                    "open"
                                );

                            }

                        }
                    );

                }

            }
        );

    }
);



/* =========================================
   EFEITO SUAVE NOS CARDS
   ========================================= */

const cards =
    document.querySelectorAll(
        ".card, .command"
    );


cards.forEach(
    function(card) {

        card.addEventListener(
            "mousemove",
            function(event) {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (
                        y -
                        centerY
                    ) / 30;


                const rotateY =
                    (
                        centerX -
                        x
                    ) / 30;


                card.style.transform =
                    `
                    perspective(700px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-5px)
                    scale(1.01)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            function() {

                card.style.transform =
                    "";

            }
        );

    }
);



/* =========================================
   CONSOLE
   ========================================= */

console.log(
    "%cOnyx Website",
    "font-size: 24px; font-weight: bold;"
);

console.log(
    "Website oficial da Onyx."
);
```

console.log("ONYX: JavaScript carregado com sucesso!");
