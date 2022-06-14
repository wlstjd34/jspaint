const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
const save = document.querySelector("#jsSave")

canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, 700, 700);
ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;

let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting(event) {
    painting = true;
}


function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function changeColor(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function changeWidth(event) {
    ctx.lineWidth = event.target.value;
}

function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, 700, 700);
    }

}

function handleModeBtnClick(event) {
    if (filling === true) {
        filling = false;
        mode.textContent = "fill";
    } else {
        filling = true;
        mode.textContent = "paint";
    }
    
}

function handleCm(event) {
    event.preventDefault;
}

function handleSaveClick(event) {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJs";
    link.click();

}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

Array.from(colors).forEach(color => color.addEventListener("click", changeColor));

if (range) {
    range.addEventListener("change", changeWidth);
}

if (mode) {
    mode.addEventListener("click", handleModeBtnClick);
}

if (save) {
    save.addEventListener("click", handleSaveClick);
}