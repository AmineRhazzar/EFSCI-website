const setHeaderHeight = () => {
    const headerImg = document.querySelector(".header-bg");
    document.querySelector(".header").style.height =
        headerImg.clientHeight + "px";
};

window.addEventListener("load", () => {
    setHeaderHeight();
    document.documentElement.scrollTop = 0;
    // var Scrollbar = window.Scrollbar;
    // Scrollbar.init(document.querySelector("#my-scrollbar"), {
    //     continuousScrolling: false,
    // });
    setInterval(()=> {
        if (document.querySelector("scroll-content")) {
            document.querySelector("scroll-content").style.transform = "translate3d(0px, 0px, 0px)"
        }
        
    }, 1000)
    
});
window.addEventListener("resize", () => {
    setHeaderHeight();
});


