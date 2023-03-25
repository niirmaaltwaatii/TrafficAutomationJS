const cnv = document.querySelector("canvas")
const ctx = cnv.getContext("2d")


var width = window.innerWidth;
var height = window.innerHeight;
cnv.width = width
cnv.height = height

var zc = {
    x: 1000,
    y: 0,
    w: 25,
    h: 800
};
var tlight ={
    x: 920,
    y: 50,
    r: 80
}

var tcar ={
    x: 0,
    y: 450,
    w: 200,
    h: 100,
    s: 10
}
function light(){
    ctx.beginPath()
    CSSTransition.fillStyle = "black"
    ctx.rect(tlight.x-10,tlight.y-10,tlight.r+20,tlight.r+20)
    ctx.fill()
    ctx.beginPath()
    ctx.fillStyle = tcolor
    ctx.rect(tlight.x,tlight.y,tlight.r,tlight.r)
    ctx.fill()
}
function car(){
    ctx.beginPath()
    ctx.fillStyle = "brown"
    ctx.rect(tcar.x,tcar.y,tcar.w,tcar.h)
    ctx.fill()
}

function zcl(){
    ctx.beginPath()
    ctx.fillStyle = "black"
    ctx.rect(zc.x,zc.y,zc.w,zc.h)
    ctx.fill()
}
function check(){
    var cpos = tcar.x+tcar.w;
    if(cpos == zc.x){
        if(tcolor == "green"){
            tcar.x += tcar.s;
        }
    }else if(tcar.x >= width){
        tcar.x = 0-tcar.w;
    }
    else{
        tcar.x += tcar.s;
    }
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

function draw(){
    window.requestAnimationFrame(draw)
    ctx.clearRect(0,0,width,height)
    zcl()
    light()
    car()
    check()
}

draw();