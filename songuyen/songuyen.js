function add(){
  let soNguyen=document.getElementById("integer").value;
  let soDuong="số nguyên dương";
  let soAm="số nguyên âm";
  if(soNguyen>0){
    document.getElementById("ketqua").value= soDuong;
  }else{
    document.getElementById("ketqua").value= soAm;
  }
  } 
  function cancle(){
    document.getElementById("integer").value= null;
    document.getElementById("ketqua").value=null;
  }