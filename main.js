canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
lineWidth = 0;
color = "red";  

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.rect(180,190,400,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 4;
ctx.arc(245,255,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 4;
ctx.arc(345,255,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 4;
ctx.arc(295,295,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.lineWidth = 4;
ctx.arc(445,255,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 4;
ctx.arc(395,295,40,0,2 * Math.PI);
ctx.stroke();
