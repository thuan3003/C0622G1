function add() {
    let voSoNghiem = "phương trinhg vô số nghiệm"
    let coNghiem = "phương trình có nghiệm x=o"
    let voNghiem = "Phương trình vô nghiệm"
    let a = Number(document.getElementById("numberA").value);
    let b = Number(document.getElementById("numberB").value); 
    let c = -b/a;
    if (a==0 && b!==0){
        document.getElementById("ketqua").value = voNghiem;
    } else if (a==0 && b==0){
        document.getElementById("ketqua").value = voSoNghiem ;
    } else if(a !=0 && b==0){
        document.getElementById("ketqua").value = coNghiem ;
    }
        else {
            document.getElementById("ketqua").value = c ;
    }
        }

function cancel() {
    document.getElementById("numberA").value = null;
    document.getElementById("numberB").value = null;
    document.getElementById("ketqua").value = null;
}