

document.querySelector(".logoArrow").addEventListener("click", bounce)

function bounce() {
    console.log("bounce");
    document.querySelector(".logoArrow").classList.add("bounce");
    document.querySelector(".logoArrow").addEventListener("animationend", unbounce)
}

function unbounce() {
    console.log("unbounce");
    document.querySelector(".logoArrow").classList.remove("bounce");
}
