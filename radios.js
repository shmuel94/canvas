const canvas = document.querySelector("#canvas");
const context= canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

//שאלה 3
// context.beginPath();
// context.fillStyle = "red";
// context.arc(95,50,30,0,2*Math.PI);
// context.fill();

//שאלה 4
// context.beginPath();
// context.fillStyle = "blue";
// context.arc(95,80,50,0,2*Math.PI);
// context.fill();

// שאלה 5
// context.beginPath();
// context.fillStyle = "green";
// context.arc(95,80,40,0,2*Math.PI);
// context.fill();// context.beginPath();
// context.fillStyle = "green";
// context.arc(195,80,40,0,2*Math.PI);
// context.fill();

// שאלה 11
// for (var i = 0; i < 10; i++) {
//     const radios = 10;
//     const x = Math.random()*context.canvas.width - radios;
//     const y = Math.random()*context.canvas.height - radios;
//     if(x < radios) x = radios;
//     if(y < radios) y = radios;
//     context.beginPath();
//     context.fillStyle = "red";
//     context.arc(x,y,radios,0,2*Math.PI);
//     context.fill();
// }

// שאלה 13
// context.fillStyle = "#f3c62b"; //fill color
        
// //face
// context.beginPath();
// context.arc(75,75,50,0,Math.PI*2,true); 
// context.closePath();
// context.fill();

// context.strokeStyle="#2a2a34"; //stroke color

// //smile
// context.moveTo(110,75);
// context.beginPath();
// context.arc(75,75,35,0.15*Math.PI,0.85*Math.PI,false); 
// context.stroke();

// //left eye

// context.moveTo(65,65);
// context.beginPath();
// context.arc(60,65,5,0,Math.PI*2,true); 
// context.closePath();
// context.fillStyle = "#2a2a34";
// context.fill();

// //right eye
// context.moveTo(95,65);
// context.beginPath();
// context.arc(90,65,5,0,Math.PI*2,true); 
// context.closePath();
// context.fillStyle = "#2a2a34";
// context.fill();