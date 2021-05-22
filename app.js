const setHeaderHeight = () => {
    const headerImg = document.querySelector(".header-img");
    document.querySelector(".header").style.height =
        headerImg.clientHeight + "px";
};
setHeaderHeight();
window.addEventListener("resize", () => {
    setHeaderHeight();
});


