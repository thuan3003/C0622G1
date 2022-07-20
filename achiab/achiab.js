function add(){
    let a = Number(document.getElementById("numberA").value);
    let b = Number(document.getElementById("numberB").value);
    let khongChiaHet = "a không chia hết cho b"
    let chiaHet= "a chia hết cho b"
    if(a%b==0){
    document.getElementById("ketqua").value=chiaHet;
}else{
    document.getElementById("ketqua").value=khongChiaHet;
}
}
function cancle(){
    document.getElementById("numberA").value=null;
    document.getElementById("numberB").value=null;
    document.getElementById("ketqua").value=null;
}