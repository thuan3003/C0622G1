function yesClick(){
    alert("yes. you are right");
}
function noHover(){
    var x= Math.round(math.random()* window.innerWidth);
    var y= Math.round(math.random()* window.innerHeight);
    document.getElementById("btnNo").style.left= x + "px";
    document.getElementById("btnNo").style.top= y + "px";
}