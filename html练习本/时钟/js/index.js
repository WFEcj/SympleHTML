var oDial = document.getElementsByClassName('dial')[0];
var oHour = document.getElementsByClassName('hour')[0],
    oMinute = document.getElementsByClassName('minute')[0],
    oSecond = document.getElementsByClassName('second')[0];
var total = 12;
function init(){
    var str='';
    for( var i = 1; i <= total ; i++){
        str+='<li class="num" style="transform: rotate('+ i*30+'deg)">\
        <span style="transform: rotate('+ (-i)*30+'deg)">'+ i +'</span>\
        </li>';
    }
    oDial.innerHTML = str;
    time();
}
init();
function time(){
    var date = new Date();
    var second = date.getSeconds();
    var milliseconds = date.getMilliseconds();
    var fillsecond = second + milliseconds/1000;
    oSecond.style.transform = 'rotate('+fillsecond*6+'deg)';


    var minute = date.getMinutes();
    var fillminute = minute + fillsecond/60;
    oMinute.style.transform = 'rotate('+fillminute*6+'deg)';  

    var hour = date.getHours();
    var fillhour = hour + fillminute / 60;
    oHour.style.transform = 'rotate('+fillhour*30+'deg)'; 
    setTimeout(time,1000/60);
}


