function add(){
    let a = document.getElementById("electric").value;
    let electric=document.getElementById("electric");
//     switch (true){
//         case electric <=50 :{
//             sum_1= (a* 1.678).toFixed(3);
//             electric.value= sum_1;
//             break;
//         }
//         case electric <=100:{
//             sum_2=((a -50) * 1.734 + (50 * 1.678)).toFixed(3);
//             electric.value=sum_2;
//             break;
//         }
//         case electric <=200:{
//             sum_3=((50 * 1.678) + (50 * 1.734) + (a-100)*2.014).toFixed(3);
//             electric.value=sum_3;
//             break;
//         }
//         case electric <=300:{
//             sum_4=((50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (a-200)*2.536).toFixed(3);
//             electric.value=sum_4;
//             break;
//         }
//         case electric <=400:{
//             sum_5=((50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (200*2.536) + (a-300)*2.834).toFixed(3);
//             electric.value=sum_5
//             break;
//         }
//         default:{
//             sum_6 = ((50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (200*2.536) + (300*2.834) + (a-400)*2.927).toFixed(3);
//             electric.value=sum_6;
//             break;
//         }
}
// }
// }
// function cancle(){
//     document.getElementById("electric").value = null;
//     document.getElementById("ketqua").innerHTML = null;
//  }
electric.value=`${a<= 50 ? 'mức 1': a<=100? 'mức 2': a<=200? 'mức 3'
: a<=300? 'mức 4':a<=400? 'mức 5':'mưc 6'
}`;
