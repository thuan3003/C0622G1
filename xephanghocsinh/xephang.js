function add() {
    let a = Number(document.getElementById("kiemtra").value);
    let b = Number(document.getElementById("thigiuaki").value);
    let c = Number(document.getElementById("thicuoiki").value);
    let diemTb = (a + (b * 2) + (c * 3)) / 6
    // if (a>8.5 && b>8.5 && c>8.5){
    //     document.getElementById("ketqua").innerHTML="Đạt học sinh giỏi";
    //     }else if (a>7.0 && b>7.0 && c>7.0){
    //         document.getElementById("ketqua").innerHTML="Đạt học sinh khá";
    //         }else if (a>5.0 && b>5.0 && c>5.0){
    //             document.getElementById("ketqua").innerHTML="Đạt học sinh trung bình";
    //                 }else if (a>3.5 && b>3.5 && c>3.5){
    //                     document.getElementById("ketqua").innerHTML="Đạt học sinh yếu";
    // }else{
    //     document.getElementById("ketqua").innerHTML="Đạt học sinh kém";
    //     }
    // }
    if (diemTb >= 8.5) {
        document.getElementById("ketqua").innerHTML = "Đạt học sinh giỏi";
        } else if (diemTb >= 7.0) {
            document.getElementById("ketqua").innerHTML = "Đạt học sinh khá";
                } else if (diemTb >= 5.0) {
                    document.getElementById("ketqua").innerHTML = "Đạt học sinh trung bình";
                        } else if (diemTb >= 3.5) {
                            document.getElementById("ketqua").innerHTML = "Đạt học sinh yếu";
                                 }else {
                                     document.getElementById("ketqua").innerHTML = "Đạt học sinh kém";
    }
}
function cancle() {
    document.getElementById("kiemtra").value = null;
    document.getElementById("thigiuaki").value = null;
    document.getElementById("thicuoiki").value = null;
    document.getElementById("ketqua").innerHTML = null;

}