
var kotae
var sukoa

function gameinit(){
    kotae=Math.floor(Math.random()*3+1)
    sukoa=100
}
function number(p){

    var pname="p"+p
    var item=document.getElementById(pname)
    if(p==kotae){
        item.src="img/atari.jpg"
        alert("#atari")
    }else{
        item.src="img/hazure.jpg"  
         alert("hazure")
         sukoa=sukoa-25
    }
    var sc=document.getElementById("sc")
    sc.innerHTML="score:"+sukoa

}