var oMin = document.getElementsByClassName('min')[0];
var oHover = document.getElementsByClassName('hover')[0];
var oMax = document.getElementsByClassName('max')[0];
var oLarge = document.getElementsByClassName('large')[0];

// oMin.onmouseover = function () {
//     console.log('over')
// }
// mouseover
oMin.onmouseover = function () {
    oHover.style.display = 'block';
    oMax.style.display = 'block';
}
oMin.onmouseout = function () {
    oHover.style.display = 'none';
    oMax.style.display = 'none';
}

oMin.onmousemove = function (e) {
    // 事件源
    var x = e.clientX - this.offsetLeft - oHover.offsetWidth/2;
    var y = e.clientY - this.offsetTop - oHover.offsetHeight/2;
    // 边界条件
    var minX = 0;
    var maxX = oMin.offsetWidth - oHover.offsetWidth;
    var minY = 0;
    var maxY = oMin.offsetHeight - oHover.offsetHeight;
    if(x < minX) {
        x = minX;
    }else if(x > maxX) {
        x = maxX;
    }
    if(y < minY) {
        y = minY;
    }else if(y > maxY) {
        y = maxY;
    }

    oHover.style.left = x + 'px';
    oHover.style.top = y + 'px';


    // x/maxX = l/(oLarge.offsetWidth - oMax.offsetWidth);
    oLarge.style.left = x/maxX * -(oLarge.offsetWidth - oMax.offsetWidth) + 'px';
    oLarge.style.top = y/maxY * -(oLarge.offsetHeight - oMax.offsetHeight) + 'px';
}

function Fdj(obj) {

}
var f = new Fdj({
    min: oMin
})



