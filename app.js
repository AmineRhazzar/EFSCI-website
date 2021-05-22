const setHeaderHeight = () => {
    const headerImg = document.querySelector(".header-img");
    document.querySelector(".header").style.height =
        headerImg.clientHeight + "px";
};
window.addEventListener("load", () => {
    setHeaderHeight();
});
window.addEventListener("resize", () => {
    setHeaderHeight();
});
