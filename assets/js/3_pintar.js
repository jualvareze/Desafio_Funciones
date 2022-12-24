const ele = document.querySelector("#ele1")
function pintar(color = "green") {
    ele.style.backgroundColor = color
}
ele.addEventListener("click", () => { pintar('yellow')});