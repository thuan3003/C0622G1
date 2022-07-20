function add(){
let a=document.getElementById("integerA").value;
let b=document.getElementById("integerB").value;
let c=document.getElementById("integerC").value;
let max = a;
if (b>max){
    max =b;
}
if (c>max){
    max =c;
}
document.getElementById("ketqua").innerHTML= "Giá trị lớn nhất là: " +max;
}

// if(a>b && a>c){
//     document.getElementById("ketqua").value= amax;
// }else if(b>c){
//     document.getElementById("ketqua").value= bmax;
// }else{
//     Document.getElementById("ketqua").value= cmax;
// }
// }
function cancle(){
    document.getElementById("integerA").value=null;
    document.getElementById("integerB").value=null;
    document.getElementById("integerC").value=null;
    document.getElementById("ketqua").innerHTML=null;}