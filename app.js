const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    if (painting) {
        const x = event.offsetX;
        const y = event.offsetY;
        console.log(x, y);
    }
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    stopPainting();
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}