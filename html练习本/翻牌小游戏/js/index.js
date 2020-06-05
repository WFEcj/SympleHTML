var photo = document.getElementsByClassName('photo');
var firstcard = true;
var secondcard = true;
var firstcard1 = null;
var secondcard2 = null;
var timer = null;
function flipcard(){
    if(firstcard == true){
        firstcard1 = this;
        firstcard1.classList.add('flip');
        firstcard = !firstcard;
    }else if(secondcard == true){
        secondcard2 = this;
        secondcard2.classList.add('flip');
        secondcard = !secondcard;
        var name1 = firstcard1.dataset.name;
        var name2 = secondcard2.dataset.name;
        if(name1 == name2 ){
            firstcard = true;
            secondcard = true;
            firstcard1 = null;
            secondcard2 = null;
        }else{
            timer = setTimeout(function(){
                firstcard1.classList.remove('flip');
                secondcard2.classList.remove('flip');
                firstcard = true;
                secondcard = true;
                firstcard1 = null;
                secondcard2 = null;
            },1000)
        }
    }
    
}
for(var i = 0; i < photo.length ; i++){
    photo[i].addEventListener('click',flipcard)
    photo[i].style.order =Math.floor(Math.random() * photo.length) 
}