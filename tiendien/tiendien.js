function add(){
    let a = document.getElementById("congsuat").value;
    if (a <=50){
        sum_1 = (a* 1.678).toFixed(3);
        document.getElementById("ketqua").innerHTML=sum_1;
        }else if (a<=100){
            sum_2 = ((a -50) * 1.734 + (50 * 1.678)).toFixed(3);
            document.getElementById("ketqua").innerHTML= sum_2;
                }else if(a<=200){
                    sum_3 = ((50 * 1.678) + (50 * 1.734) + (a-100)*2.014).toFixed(3);
                    document.getElementById("ketqua").innerHTML=sum_3;
                        }else if(a<=300){
                            sum_4 = ((50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (a-200)*2.536).toFixed(3);
                            document.getElementById("ketqua").innerHTML= sum_4;
                                }else if(a<=400){
                                    sum_5 = ((50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (200*2.536) + (a-300)*2.834).toFixed(3);
                                    document.getElementById("ketqua").innerHTML= sum_5;
                                    }else{
                                        sum_6 = ((50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (200*2.536) + (300*2.834) + (a-400)*2.927).toFixed(3);
                                        document.getElementById("ketqua").innerHTML= sum_6;
}
}
function cancle(){
    document.getElementById("congsuat").value = null;
    document.getElementById("ketqua").innerHTML = null;
}