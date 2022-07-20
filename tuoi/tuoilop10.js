function add(){
let tuoi=document.getElementById("age").value;
let lop_10= "đủ điều kiện vào lớp 10";
let truotLop_10="không đủ điều kiện vào lơp 10";
if(tuoi>=15){
    document.getElementById("ketqua").value=lop_10;
}else{
    document.getElementById("ketqua").value=truotLop_10;
}
}
function cancle(){
    document.getElementById("age").value=null;
    document.getElementById("ketqua").value=null;
}