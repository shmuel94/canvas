const canvas = document.querySelector("#canvas");
const context= canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// שאלה 6
// context.fillStyle = "green";
// context.fillRect(0,0,50,50);
// context.fillStyle = "yellow";
// context.fillRect(0,50,50,50);
// context.fillStyle = "red";
// context.fillRect(0,100,50,50);

// let x1 = 0;
// let x2 = 0;
// let x3 = 0;

// let dir1 = "ltr";
// let dir2 = "ltr";
// let dir3 = "ltr";

// setInterval(()=>{
//     context.clearRect(x1,0,50,50);
//     context.fillStyle = "green";
//     if (dir1 ==="ltr") x1+=20;
//     else x1-=20;
//     if(x1>=canvas.width -120) dir1="rtl";
//     if (x1<= 0) dir1="ltr"
//     context.fillRect(x1,0,50,50);
// },500);

// setInterval(()=>{
//     context.clearRect(x2,50,50,50);
//     context.fillStyle = "yellow";
//     if (dir2 ==="ltr") x2+=20;
//     else x2-=20;
//     if(x2>=canvas.width -120) dir2="rtl";
//     if (x2<= 0) dir2="ltr"
//     context.fillRect(x2,50,50,50);
// },500);

// setInterval(()=>{
//     context.clearRect(x3,100,50,50);
//     context.fillStyle = "red";
//     if (dir3 ==="ltr") x3+=20;
//     else x3-=20;
//     if(x3>=canvas.width -120) dir3="rtl";
//     if (x3<= 0) dir3="ltr"
//     context.fillRect(x3,100,50,50);
// },500);

// שאלה 10
// for (var i = 0; i < 10; i++) {
//     const x = Math.random()*context.canvas.width;
//     const y = Math.random()*context.canvas.height;
//     context.fillStyle = "green";
//     const a = Math.random()*250;
//     context.beginPath();
//     context.fillRect(x,y,50,50);
// }

// שאלה 12
// for (var i = 0; i < 10; i++) {
//     const x = Math.random()*context.canvas.width;
//     const y = Math.random()*context.canvas.height;
//     const r = parseInt(Math.random()*255);
//     const g = parseInt(Math.random()*255);
//     const b = parseInt(Math.random()*255);
//     const a = Math.random()*250;
//     context.beginPath();
//     context.fillRect(x,y,50,50);
//     context.fillStyle = "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
// }