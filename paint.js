const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let painting = false;

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", () => {
    c.strokeStyle = colorPicker.value;
});

const brushSize = document.getElementById("brushSize");
brushSize.addEventListener("input", ()=>{
    c.lineWidth= brushSize.value;
});
c.lineCap="round";
c.lineWidth=5;

canvas.addEventListener("mousedown", () => (painting = true));
canvas.addEventListener("mouseup", () => {
    painting = false;
    c.beginPath();
});

canvas.addEventListener("mousemove", draw);
document.getElementById("clearButton").addEventListener("click", () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
});

function draw(e) {
    if (!painting) return;

    c.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    c.stroke();
    c.beginPath();
    c.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);

}
