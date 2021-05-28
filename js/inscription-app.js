const dateInput = document.querySelector("#date-input");
dateInput.addEventListener("focus", () => {
    dateInput.type = "date";
    dateInput.focus();
});
dateInput.addEventListener("blur", () => {
    if (!dateInput.value) {
        dateInput.type = "text";
    }
});

const loader = document.querySelector(".loader");
document.body.style.overflowY = "hidden";
loader.classList.add("loader-fadeout");
    
//waiting for the fadeout animation to complete (300ms) 
setTimeout(() => {
    loader.style.display = "none";
    document.body.style.overflowY = "scroll";
}, 3000)

window.onload = () => {
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    
        


};

document.querySelector(".gender:nth-child(1)").addEventListener("click", () => {
    document.querySelector(".gender:nth-child(1) input").checked = true;
});

document.querySelector(".gender:nth-child(2)").addEventListener("click", () => {
    document.querySelector(".gender:nth-child(2) input").checked = true;
});

const nationaliteSelect = document.querySelector("#nationalite");
nationaliteSelect.addEventListener("change", () => {
    if (nationaliteSelect.value) {
        nationaliteSelect.classList.remove("onPlaceholder");
    } else {
        if (!nationaliteSelect.classList.contains("onPlaceholder")) {
            nationaliteSelect.classList.add("onPlaceholder");
        }
    }
});

const firstInputFormGrp = document.querySelector(".form-grp:nth-child(1)");

nationaliteSelect.addEventListener("focus", function () {
    this.oldvalue = this.value; //store old value to compare it tu future values onchange
});

//open
nationaliteSelect.addEventListener("mousedown", function () {
    this.size = 8;
    firstInputFormGrp.style.height =
        nationaliteSelect.clientHeight + nationaliteSelect.clientHeight + "px";
});
nationaliteSelect.addEventListener("click", function (e) {
    if (this.value === this.oldvalue) {
        this.size = 0;
        firstInputFormGrp.style.height = "322px";
    }
});

//close
document.addEventListener("click", function (e) {
    if (!nationaliteSelect.contains(e.target)) {
        nationaliteSelect.size = 0;
    }
    firstInputFormGrp.style.height = "322px";
});
nationaliteSelect.addEventListener("change", function () {
    console.log(this.value);
    this.size = 0;
    firstInputFormGrp.style.height = "322px";
});

document.querySelectorAll(".situation").forEach((sit, id) => {
    sit.addEventListener("click", () => {
        document.querySelector(
            `.situation:nth-child(${id + 1}) input[type="radio"]`
        ).checked = true;
    });
});

document.querySelector(".autre-sit").addEventListener("click", () => {
    document.querySelector("#autre-input").disabled = false;
    document.querySelector("#autre-input").focus();
});

document.querySelector("#autre-input").addEventListener("change", (e) => {
    document.querySelector(`.autre-sit input[type="radio"]`).value =
        e.target.value;
});

document.querySelectorAll(".connu").forEach((con, id) => {
    con.addEventListener("click", () => {
        document.querySelector(
            `.connu:nth-child(${id + 1}) input[type="radio"]`
        ).checked = true;
    });
    if (id + 1 >= 3) {
        document
            .querySelector(`.connu:nth-child(${id + 1}) input[type="text"]`)
            .addEventListener("change", (e) => {
                document.querySelector(`.autre-sit input[type="radio"]`).value =
                    e.target.value;
            });
        document.querySelector(
            `.connu:nth-child(${id + 1}) input[type="text"]`
        ).disabled = false;
        document
            .querySelector(`.connu:nth-child(${id + 1}) input[type="text"]`)
            .focus();
    }
});

document.querySelectorAll(".financement").forEach((fin, id) => {
    fin.addEventListener("click", () => {
        document.querySelector(
            `.financement:nth-child(${id + 1}) input[type="radio"]`
        ).checked = true;
    });
});
document.querySelectorAll(".payement").forEach((fin, id) => {
    fin.addEventListener("click", () => {
        document.querySelector(
            `.payement:nth-child(${id + 1}) input[type="radio"]`
        ).checked = true;
    });
});

document.querySelectorAll(".joint").forEach((fin, id) => {
    fin.addEventListener("click", () => {
        document.querySelector(
            `.joint:nth-child(${id + 1}) input[type="checkbox"]`
        ).checked = !document.querySelector(
            `.joint:nth-child(${id + 1}) input[type="checkbox"]`
        ).checked;
    });
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
