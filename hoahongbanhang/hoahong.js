function add(){
let a = document.getElementById("doanhthu").value;
if(a>200){
    document.getElementById("ketqua").innerHTML="hoa hồng bằng 10% doanh thu";
}else if(a>100){
    document.getElementById("ketqua").innerHTML="hoa hồng bằng 5% doanh thu";
}else if(a>50){
    document.getElementById("ketqua").innerHTML="hoa hồng bằng 2% doanh thu";
}else{
    document.getElementById("ketqua").innerHTML="không có hoa hồng";
}
}
function cancle(){
    document.getElementById("doanhthu").value = null;
    document.getElementById("ketqua").innerHTML = null;
}