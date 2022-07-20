function add(){
let a=document.getElementById("numberA").value;
let b=document.getElementById("numberB").value;
let c=document.getElementById("numberC").value;
let delta=Math.pow(tsB, 2)- 4*tsA*tsC;
let result="";
//  let x= -b/(2*a);
// let x1=(-b+ Math.sqrt(delta))/(2*a);
// let x2=(-b- Math.sqrt(delta))/(2*a);
if ((delta)>0){
    // x1=(-b+ Math.sqrt(delta))/(2*a);
    document.getElementById("result").innerHTML="phương trình có 2 nghiệm phân biệt:<br> x<sub>1</sub> = " + (((- tsB)+(Math.sqrt(dt)))/(2*tsA)) + "<br> và <br>" + "x<sub>2</sub>= " + (((-tsB)-(Math.sqrt(dt)))/(2*tsA));
    // x2=(-b- Math.sqrt(delta))/2*a;
    // document.getElementById("ketqua").value=x2;
}else if((delta)==0){
    // x= -b/2*a
    document.getElementById("ketqua").innerHTML="phương trình có một nghiệm kép:x<sub>1</sub> = x<sub>2</sub> = " + ((- tsB)/(2*tsA)); 
} else {
    document.getElementById("ketqua").innerHTML= "phương trình vô nghiệm";
}
}
function cancel(){
    document.getElementById("numberA").value=null;
    document.getElementById("numberB").value=null;
    document.getElementById("numberC").value=null;
    document.getElementById("ketqua").value =null;
}