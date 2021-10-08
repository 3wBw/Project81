canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle= "blue";
ctx.lineWidth= 5;
ctx.arc(280, 250, 45, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(380, 250,45, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(480, 250, 45, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 5;
ctx.arc(330, 290, 45, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(430, 290, 45, 0, 360);
ctx.stroke();

function clearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height)
    console.log("insideclearArea")
}



