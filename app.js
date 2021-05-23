const setHeaderHeight = () => {
    const headerImg = document.querySelector(".header-bg");
    document.querySelector(".header").style.height =
        headerImg.clientHeight + "px";
};

window.addEventListener("load", () => {
    setHeaderHeight();
});
window.addEventListener("resize", () => {
    setHeaderHeight();
});

var Scrollbar = window.Scrollbar;

Scrollbar.init(document.querySelector("#my-scrollbar"), {
    damping: 0.1,
    continuousScrolling: false
})
