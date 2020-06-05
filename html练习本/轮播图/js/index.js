var prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    main = document.getElementsByClassName('main')[0],
    list = document.getElementsByClassName('list')[0],
    li = list.getElementsByTagName('li'),
    container = document.getElementsByClassName('container')[0];
var timer;
var index=0;
var flag=true;
function moveImg(dis){
    flag=false;
    var time=400;
    var eachTime= 20;
    var eachDis=dis/(time/eachTime);
    var newLeft=main.offsetLeft + dis;
    function eachMove(){
        if(dis > 0&&main.offsetLeft < newLeft || dis < 0&&main.offsetLeft > newLeft){
            main.style.left = main.offsetLeft + eachDis + 'px';
        }else{
            clearInterval(timer);
            main.style.left= newLeft + 'px';
            if(newLeft == -3120){
                main.style.left= -520 +'px';
            }
            if(newLeft == 0){
                main.style.left=-2600 +'px'
            }
            flag=true;
        }
    }
    timer=setInterval(eachMove,eachTime);
}

prev.onclick=function(){
    if(flag==false) return;
    moveImg(520);
    if(index == 0){
        index=4;
    }else{
        index--;
    }
    listyle();
}
next.onclick=function(){
    if(flag==false) return;
    moveImg(-520);
    if(index == 4){
        index=0;
    }else{
        index++;
    }
    listyle();
}
function listyle(){
    list.getElementsByClassName('active')[0].className='';
    li[index].className='active';
}
for( var i= 0;i<li.length;i++){
    (function (j){
        li[j].onclick = function (){
            var num = (j-index)*(-520);
            index=j;
            listyle();
            moveImg(num);
        }
    })(i);
}
var timer2 = setInterval(next.onclick,2000);
container.onmouseover = function(){
    clearInterval(timer2);
}
container.onmouseout = function(){
    timer2 = setInterval(next.onclick,2000);
}