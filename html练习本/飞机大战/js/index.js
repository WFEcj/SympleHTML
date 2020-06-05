var oContainer = document.getElementsByClassName('container')[0];
var oPlane = document.getElementsByClassName('plane')[0];
var oBullet = document.getElementsByClassName('bullet')[0];
var bullets = [];
oContainer.addEventListener("mousemove",function(event){
    var mouseLeft = event.clientX;
    var mouseTop = event.clientY;
    var containerLeft = oContainer.offsetLeft;
    var containerTop = oContainer.offsetTop;
    var planeLeft = mouseLeft - containerLeft;
    if(planeLeft > 33 && planeLeft < 290){
        oPlane.style.left =planeLeft  + 'px';
    }
    if(mouseTop < 500 && mouseTop > 0 ){
        oPlane.style.top = mouseTop + 'px';
    }
})
function createBullet(){
    var bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.left = oPlane.offsetLeft + 31 +'px';
    bullet.style.top = oPlane.offsetTop - 15 +'px';
    oContainer.appendChild(bullet);
    setInterval(function(){
        bullet.style.top = bullet.offsetTop - 20 + 'px';
        if(bullet.offsetTop < 0){
            oContainer.removeChild(bullet);
        }
    },20)
}
setInterval(function(){
    createBullet();
},100)




