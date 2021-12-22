const canvas = document.querySelector("#canvas");
const context= canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// שאלה 9
const player = {
    x: canvas.width/2,
    y: canvas.height -80,
    width: 50,
    height: 50
};
context.fillStyle = "green";
context.fillRect(player.x, player.y, player.width, player.height);

const jump =()=>{
    let y = player.y;
    const up = setInterval(()=>{
        context.clearRect(player.x, player.y, player.width, player.height)
        y = y -10
    context.fillStyle = "green";
    context.fillRect(player.x, player.y, player.width, player.height);
    if(y == canvas.height -80){
        clearInterval(up)
        setTimeout(()=>{
        context.clearRect(player.x, player.y, player.width, player.height)
        context.fillStyle = "green";
        context.fillRect(player.x, player.y, player.width, player.height);
        },400);
    }
    },400)
}
document.addEventListener("keyup", jump)