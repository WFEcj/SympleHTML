var time = document.getElementsByClassName('time')[0];
var play = document.getElementsByClassName('play')[0];
var song = document.getElementsByClassName('song')[0];
var btn = document.getElementsByClassName('btn1');
var btn2 = document.getElementsByClassName('btn2');
var container = document.getElementsByClassName('container')[0];
var music = document.getElementsByClassName('music');
var tip = document.getElementById('tip');
var timer = null;
var change = true;
var seconds = 600;
for(var i = 0;i < music.length;i++) {
    music[i].addEventListener('click',function(){
        song.src = this.dataset.sound;
        tip.innerHTML = "正在播放: " + this.dataset.name;
    })
}
for(var i = 0;i < btn.length;i++){
    btn[i].addEventListener('click',function(){
        seconds = this.dataset.time;
        changetime();
    })
}
for(var i = 0;i < btn2.length;i++){
    btn2[i].addEventListener('click',function(){
        container.style.backgroundImage = "url("+this.dataset.img+")";
        song.src = this.dataset.sound;
        tip.innerHTML = "正在播放: " + this.dataset.name;
    })
}
play.addEventListener('click',function(){
    if(change){
        song.play();
        play.src = './svg/pause.svg';
        change = !change;
        timer = setInterval(function(){
            seconds--;
            changetime();
        },1000);
    }else{
        song.pause();
        play.src = './svg/play.svg';
        change = !change;
        clearInterval(timer);
    }
})
function changetime(){
    var minute = Math.floor(seconds/60);
    var seconds2 = seconds - minute*60;
    if(minute < 10){
        minute = "0" + minute;
    }
    if(seconds2 < 10){
        seconds2 = "0" + seconds2;
    }
    time.innerText = minute + ':' +seconds2;
} 


