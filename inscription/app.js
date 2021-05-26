$(function datepicker() {
    $(".calendar").datepicker({
        dateFormat: "dd/mm/yy",
        firstDay: 1,
    });

    $(document).on("click", ".date-picker .input", function (e) {
        var $me = $(this),
            $parent = $me.parents(".date-picker");
        $parent.toggleClass("open");
    });

    $(".calendar").on("change", function () {
        var $me = $(this),
            $selected = $me.val(),
            $parent = $me.parents(".date-picker");
        $parent.find(".result").children("span").html($selected);
    });
});

document.addEventListener("click", (e) => {
    try {
        const datepicker = document.querySelector(".open");
        if (
            !datepicker.contains(e.target) ||
            e.target != document.querySelector("ui-datepicker-prev:after") ||
            e.target != document.querySelector("ui-datepicker-next:after")
        ) {
            datepicker.classList.remove("open");
        }
    } catch (e) {}
});

window.onload = () => {
    const datePickerBtn = document.querySelector(".date-picker .input button ");
    datePickerBtn.addEventListener("click", (e) => {
        e.preventDefault();
    });
};

document.querySelector(".gender:nth-child(1)").addEventListener("click", () => {
    document.querySelector(".gender:nth-child(1) input").checked = true;
});

document.querySelector(".gender:nth-child(2)").addEventListener("click", () => {
    document.querySelector(".gender:nth-child(2) input").checked = true;
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
