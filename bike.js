const cnv = document.querySelector("#canvas")
const ctx = cnv.getContext("2d")

cnv.style.background = "grey"
var width = window.innerWidth;
var height = window.innerHeight;
cnv.width = width
cnv.height = height

var zc = {
    x: 800,
    y: 0,
    w: 30,
    h: height
};

var tlight ={
    x: 900,
    y: 50,
    r: 50
}
var tcolor = "red";
function ctcolor(){
    if(tcolor == "red"){
        tcolor = "green"
    }else{
        tcolor = "red"
    }
}
setInterval(ctcolor,4000)

var c = ["lime", "blue", "teal", "yellow", "purple", "orange", "pink", "brown"];
var cn = 7
function rc(n){
    return Math.floor(Math.random()*n)
}

const bikes = [];
for(let i = 0; i < 4; i++){
  bikes.push({
    x: 0+(i*50),
    y: 500 - (i * 100),
    w: 100,
    h: 50,
    s: 30,
    p: c[rc(7)]
  });
}
function drawBikes() {
    bikes.forEach(bike => {
        ctx.beginPath()
        ctx.fillStyle = bike.p;
        ctx.rect(bike.x, bike.y, bike.w, bike.h);
        ctx.fill()
    });
    checkBikes();
}

function checkBikes() {
    bikes.forEach(bike => {
        if (bike.x+bike.w == zc.x){
            if(tcolor == "green"){
                bike.x += bike.s
            }else{
                bike.x += 0;
            }
        }else if(bike.x >= width){
            bike.x = 0
            var s = [10,14,28,5]
            var r = Math.floor(Math.random()*3)
            bike.s = s[r]
            bike.p = c[rc(7)]
        }else{
            bike.x += bike.s
        }
    });

}



function light(){
    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.fillRect(tlight.x-10,tlight.y-10.,tlight.r+20,tlight.r*2+20)
    ctx.fillStyle = tcolor
    if(tcolor == "red"){
        ctx.rect(tlight.x,tlight.y,tlight.r,tlight.r)
    }else{
        ctx.rect(tlight.x,tlight.y+tlight.r,tlight.r,tlight.r)
    }
    ctx.fill()
}

function zcl(){
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.fillRect(zc.x,zc.y,zc.w,zc.h)
    ctx.fill()
}

function draw(){
    window.requestAnimationFrame(draw)
    ctx.clearRect(0,0,width,height)
    zcl()
    light()
    drawBikes()
}

draw();