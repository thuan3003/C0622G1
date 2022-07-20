function kiem_tra(){
    let can_nang=document.getElementById("can_nang").value;
    let chieu_cao=document.getElementById("chieu_cao").value;
    let bmi=(can_nang)/(math.pow(chieu_cao,2));
    let result="";
    if(bmi<18.5){
        result= "thiếu cân";
    }else if(bmi<25){
        result="bình thường";
        }else if (bmi<30){
        result="thừa cân";
            }else {
            result="béo phì";
        }
    }
    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>";