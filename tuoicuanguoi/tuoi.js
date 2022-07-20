function add(){
    let tuoi =Number(document.getElementById("age").value);
    if (tuoi>0 && tuoi<120){
        document.getElementById("ketqua").innerHTML="Là tuổi của một người";
    }else {
        document.getElementById("ketqua").innerHTML="Khong phải là tuổi của một người";
    }
}
function cancle(){
    document.getElementById("age").value= null;
    document.getElementById("ketqua").innerHTML=null;
}