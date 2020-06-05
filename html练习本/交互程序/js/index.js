var Change = document.getElementsByClassName("change")[0];
var spans = document.getElementsByTagName('span');
var spanArr = Array.prototype.slice.call(spans);
var Dec3 = document.getElementsByClassName('dec3')[0];
var a = document.getElementsByClassName('return')[0];
var ul = document.getElementsByTagName('ul')[0];
var angle = 0;
var active;
Change.onclick = function(){
    angle += 180;
    Change.style.transform = 'rotate('+ angle +'deg)';
    spanArr.forEach(function(ele,index){
        ele.className = ele.className == 'dec1' ? 'dec2' : 'dec1';
/*         if(ele.className == 'dec1'){
            ele.className = 'dec2';
        }else{
            ele.className = 'dec1';
        } */
    })
}
spanArr.forEach(function(ele,index){
    ele.onclick = function(){
        Dec3.style.left = 0;
        active = ele;
    }
})
a.onclick = function(){
    Dec3.style.left = '100%';
}
ul.addEventListener('click',function(e){
    var target = e.target;
    if(target.nodeName !== 'LI') return;
    active.innerText = target.innerText;
    a.onclick();
})
