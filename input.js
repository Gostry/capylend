let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let a = document.getElementById("a");
let h1 = document.getElementById("h1");

red.addEventListener("input", red1);
green.addEventListener("input", green1);
blue.addEventListener("input", blue1);
a.addEventListener("input", a1);

function red1() {
    document.body.style.backgroundColor =
        "rgba(" + red.value + "," + green.value + "," + blue.value + "," + a.value + ")";
    document.getElementById("h1").textContent =
        "rgba(" + red.value + "," + green.value + "," + blue.value + "," + a.value + ")";
}
function green1() {
    document.body.style.backgroundColor =
        "rgba(" + red.value + "," + green.value + "," + blue.value + "," + a.value + ")";
    document.getElementById("h1").textContent =
        "rgba(" + red.value + "," + green.value + "," + blue.value + "," + a.value + ")";
}
function blue1() {
    document.body.style.backgroundColor =
        "rgba(" + red.value + "," + green.value + "," + blue.value + "," + a.value + ")";
    document.getElementById("h1").textContent =
        "rgba(" + red.value + "," + green.value + "," + blue.value + "," + a.value + ")";
}
function a1() {
    document.body.style.backgroundColor =
        "rgba(" + red.value + "," + green.value + "," + blue.value + "," + a.value + ")";
    document.getElementById("h1").textContent =
        "rgba(" + red.value + "," + green.value + "," + blue.value + "," + a.value + ")";
}
