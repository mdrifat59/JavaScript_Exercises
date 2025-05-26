
document.addEventListener("DOMContentLoaded", function () {
    const initial = document.querySelector(".initial")
    const replay = document.querySelector("#replay")
    const wrapper = document.querySelector(".count-area-wrapper")
    const area = document.querySelector(".count-area")
    let count_star = 3

    for (let i = count_star; i >= 0; i--) {
        const countTag = createEelemnt(i)
        area.appendChild(countTag)
    }

    function createEelemnt(text) {
        const p = document.createElement("p")
        p.textContent = text
        return p
    }

    const allCountTag = document.querySelectorAll(".count-area > p")

    countInandOutStart()

    function countInandOutStart() {
        for (let i = 0; i <= count_star; i++) {
            setTimeout(() => {
                countInandOut(i)
            }, 2000 * i)

        }
    }

    function countInandOut(i) {
        allCountTag[i].style.display = "block";
        allCountTag[i].classList.add("in");

        setTimeout(() => {
            allCountTag[i].classList.add("out");
            hide(i);
        }, 1500);
    }

    function hide(i) {
        setTimeout(() => {
            allCountTag[i].style.display = "none";
            allCountTag[i].classList.remove("in");
            allCountTag[i].classList.remove("out");

            if (i === count_star) {
                showinitial();
            }
        }, 500);
    }

    function showinitial() {
        wrapper.style.display = "none";
        initial.classList.add("show");
    }

    replay.addEventListener("click", () => {
        initial.classList.remove("show");

        setTimeout(() => {
            wrapper.style.display = "block";
            countInandOutStart();
        }, 500);
    });
});