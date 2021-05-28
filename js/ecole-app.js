const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
var firstTimeClicked = true;
const header = document.querySelector(".header");

burger.addEventListener("click", () => {
    //handle navlinks open
    if (burger.classList.contains("close")) {
        // header.style.height = "100vh";
        burger.classList.toggle("close");
        burger.classList.toggle("open");
        window.scrollTo(0, 0);
        navLinks.classList.remove("slide-out");
        navLinks.classList.add("slide-in");

        document.querySelector(".label").innerHTML = "FERMER";
        document.body.style.overflowY = "hidden";

        document
            .querySelectorAll(
                ".header > *:not(.burger, .nav-links, .header-bg-container, nav)"
            )
            .forEach((elem) => {
                elem.style.zIndex = "unset";
            });

        document.querySelector(".nav-link-inscris").innerHTML =
            "formulaire d'inscription";

        if (firstTimeClicked) {
            var svgArrow = document.createElement("object");
            svgArrow.data = "./arrow.svg";
            svgArrow.style.marginLeft = "1rem";
            document.querySelector(".last").appendChild(svgArrow);
            firstTimeClicked = false;
        }
    } else if (burger.classList.contains("open")) {
        //handle navLinks close
        burger.classList.toggle("open");
        
        burger.classList.toggle("close");
        // header.style.height = "60vh";
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.remove("slide-in");
        navLinks.classList.add("slide-out");
        document.querySelector(".label").innerHTML = "MENU";

        setTimeout(() => {
            document.body.style.overflowY = "scroll";

            document
                .querySelectorAll(".header > *:not(.header-bg-container)")
                .forEach((elem) => {
                    elem.style.zIndex = "5";
                });
        }, 300);
    }
});