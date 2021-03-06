const setHeaderHeight = () => {
    const headerImg = document.querySelector(".header-bg");
    document.querySelector(".header").style.height =
        headerImg.clientHeight + "px";
};

history.scrollRestoration = "manual";

const loader = document.querySelector(".loader");
document.body.style.overflowY = "hidden";

//waiting for the fadeout animation to complete (300ms)
var hideLoader = () => {
    loader.classList.add("loader-fadeout");
    setTimeout(() => {
        loader.style.display = "none";
        document.body.style.overflowY = "scroll";
    }, 300)
};

const start = Date.now();

var loaderTimeout = setTimeout(() => { hideLoader(); }, 3500)


window.addEventListener("load", () => {
    // clearTimeout(hideLoaderTimeout);
    
    // console.log(Date.now() - start);
    //scroll to top because if scroll is restored the smooth scrolling gets messed up
    window.scrollTo(0, 0);

    setHeaderHeight();

    //on desktop
    if (screen.width >= 1300) {
        //Loading the smooth scrolling
        // var Scrollbar = window.Scrollbar;
        // Scrollbar.init(document.querySelector("#my-scrollbar"), {
        //     continuousScrolling: false,
        // });

        document.querySelector(".title").innerHTML =
            "Formation&nbsp;de&nbsp;4&nbsp;mois éligible&nbsp;à&nbsp;tous&nbsp;financements";
        document.querySelector(".title-3").innerHTML =
            "Le &nbsp;conseil&nbsp;en&nbsp;image qui&nbsp;dépasse&nbsp;le&nbsp;relooking";
    } else {
        document.querySelector(".title").innerHTML =
            "Formation de 4 mois éligible à tous financements";
        document.querySelector(".title-3").innerHTML =
            "Le conseil en image qui dépasse le relooking";
    }
});

window.addEventListener("resize", () => {
    setHeaderHeight();
    if (screen.width >= 1300) {
        document.querySelector(".title").innerHTML =
            "Formation&nbsp;de&nbsp;4&nbsp;mois éligible&nbsp;à&nbsp;tous&nbsp;financements";
        document.querySelector(".title-3").innerHTML =
            "Le &nbsp;conseil&nbsp;en&nbsp;image qui&nbsp;dépasse&nbsp;le&nbsp;relooking";
    } else {
        document.querySelector(".title").innerHTML =
            "Formation de 4 mois éligible à tous financements";
        document.querySelector(".title-3").innerHTML =
            "Le conseil en image qui dépasse le relooking";
    }
});

const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
var firstTimeClicked = true;

burger.addEventListener("click", () => {
    //handle navlinks open
    if (burger.classList.contains("close")) {
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
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.remove("slide-in");
        navLinks.classList.add("slide-out");
        document.body.style.overflowY = "scroll";
        document.querySelector(".label").innerHTML = "MENU";

        setTimeout(() => {
            document
                .querySelectorAll(".header > *:not(.header-bg-container)")
                .forEach((elem) => {
                    elem.style.zIndex = "5";
                });
        }, 300);
    }
});
