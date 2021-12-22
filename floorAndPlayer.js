const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight

// שאלה 7
// const floor = {
//     x: 0,
//     y: canvas.height - 30,
//     width: canvas.width,
//     height: 30
// };
// context.fillStyle = "gold";
// context.fillRect(floor.x, floor.y, floor.width, floor.height);

// שאלה 8
// const player = {
//     x: 0,
//     y: canvas.height -80,
//     width: 50,
//     height: 50
// };
// context.fillStyle = "green";
// context.fillRect(player.x, player.y, player.width, player.height);

// let dir = "ltr";

// function ltrAndRtl(){
//     context.clearRect(player.x, player.y, player.width, player.height);
//     context.fillStyle = "green";
//     if (dir ==="ltr") player.x+=2;
//     else player.x-=2;
//     if(player.x>=canvas.width -102) dir="rtl";
//     if (player.x<= 0) dir="ltr"
//     context.fillRect(player.x, player.y, player.width, player.height);
//     window.requestAnimationFrame(ltrAndRtl)
// }
// ltrAndRtl()