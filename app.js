const setHeaderHeight = () => {
    const headerImg = document.querySelector(".header-bg");
    document.querySelector(".header").style.height =
        headerImg.clientHeight + "px";
};

history.scrollRestoration = "manual";

window.addEventListener("load", () => {
    window.scrollTo(0, 0);
    setHeaderHeight();
    if (screen.width >= 968) {
        var Scrollbar = window.Scrollbar;
        Scrollbar.init(document.querySelector("#my-scrollbar"), {
            continuousScrolling: false,
        });
        document.querySelector(".title").innerHTML =
            "Formation&nbsp;de&nbsp;4&nbsp;mois éligible&nbsp;à&nbsp;tous&nbsp;financement";
        document.querySelector(".title-3").innerHTML =
            "Le &nbsp;conseil&nbsp;en&nbsp;image qui&nbsp;dépasse&nbsp;le&nbsp;relooking";
    }
});
window.addEventListener("resize", () => {
    setHeaderHeight();
    if (screen.width >= 968) {
        document.querySelector(".title-3").innerHTML =
            "Le &nbsp;conseil&nbsp;en&nbsp;image qui&nbsp;dépasse&nbsp;le&nbsp;relooking";
    } else {
        document.querySelector(".title-3").innerHTML =
            "Le conseil en image qui dépasse le relooking";
    }
});
