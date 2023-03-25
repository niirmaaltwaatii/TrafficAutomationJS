const cnv = document.querySelector("canvas")
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

var tcar ={
    x: 0,
    y: 250,
    w: 150,
    h: 80,
    s: 10
}
var tbus ={
    x: 0,
    y: 400,
    w: 200,
    h: 100,
    s: 5
}

var ccar = "teal",cbus = "brown"
var c = ["lime", "blue", "teal", "yellow", "purple", "orange", "pink", "brown"];

function rc(n){
    return Math.floor(Math.random()*n)
}
function ry(){
    var min = 200, max = 500
    var r = Math.floor(Math.random()*300)+200
    return r
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
function car(){
    ctx.beginPath()
    ctx.fillStyle = ccar
    ctx.rect(tcar.x,tcar.y,tcar.w,tcar.h)
    ctx.fill()
    checkCar()
}
function bus(){
    ctx.beginPath()
    ctx.fillStyle = cbus
    ctx.rect(tbus.x,tbus.y,tbus.w,tbus.h)
    ctx.fill()
    checkBus()
}
function zcl(){
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.fillRect(zc.x,zc.y,zc.w,zc.h)
    ctx.fill()
}
function checkCar(){
    var cpos = tcar.x+tcar.w;
    if(cpos == zc.x){
        if(tcolor == "green"){
            tcar.x += tcar.s;
        }
    }else if(tcar.x >= width){
        tcar.x = 0-tcar.w;
        var sa = [5,10,20,40]
        rs = Math.floor(Math.random()* 3)+1;
        tcar.s = sa[rs];
        ccar = c[rc(7)]
        // tcar.y = ry()
    }/* else if(cpos+10 <= tbus.x && tcar.y == tbus.y){
        tcar.x += 0
    } */
    else{
        tcar.x += tcar.s;
    }
}
function checkBus(){
    var cpos = tbus.x+tbus.w;
    if(cpos == zc.x){
        if(tcolor == "green"){
            tbus.x += tbus.s;
        }
    }else if(tbus.x >= width){
        tbus.x = 0-tbus.w;
        var sa = [8,16,25,32]
        rs = Math.floor(Math.random()* 3)+1;
        tbus.s = sa[rs];
        cbus = c[rc(7)]
        // tcar.y = ry()
    }
    /* else if(cpos+10<=tcar.x && tbus.y == tcar.y){
         tbus.x += 0
    } */
    else{
        tbus.x += tbus.s;
    }
}
function draw(){
    window.requestAnimationFrame(draw)
    ctx.clearRect(0,0,width,height)
    zcl()
    light()
    car()
    bus()
}


// setInterval(draw,100)

draw();