const setHeaderHeight = () => {
    const headerImg = document.querySelector(".header-bg");
    document.querySelector(".header").style.height =
        headerImg.clientHeight + "px";
};

history.scrollRestoration = 'manual';


window.addEventListener("load", () => {
    setHeaderHeight();
    document.documentElement.scrollTop = 0;
    var Scrollbar = window.Scrollbar;
    Scrollbar.init(document.querySelector("#my-scrollbar"), {
        continuousScrolling: false,
    });
    setInterval(() => {
        if (document.querySelector("scroll-content")) {
            document.querySelector("scroll-content").style.transform =
                "translate3d(0px, 0px, 0px)";
        }
    }, 1000);
    if (screen.width >= 968) {
        document.querySelector(".title-3").innerHTML = "Le &nbsp;conseil&nbsp;en&nbsp;image qui&nbsp;dépasse&nbsp;le&nbsp;relooking";
    }
});
window.addEventListener("resize", () => {
    setHeaderHeight();
    if (screen.width >= 968) {
        document.querySelector(".title-3").innerHTML = "Le &nbsp;conseil&nbsp;en&nbsp;image qui&nbsp;dépasse&nbsp;le&nbsp;relooking";
    } else {
        document.querySelector(".title-3").innerHTML = "Le conseil en image qui dépasse le relooking";
    }
});
