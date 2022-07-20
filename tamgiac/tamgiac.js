function add() {
    let a = Number(document.getElementById("realnumberA").value);
    let b = Number(document.getElementById("realnumberB").value);
    let c = Number(document.getElementById("realnumberC").value);
    if (a > 0 && b > 0 && c > 0) {
        if ((a + b) > c && (b + c) > a && (a + c) > b) {
            document.getElementById("ketqua").innerHTML = "Là cạnh của tam giác";
        } else 
        {
            document.getElementById("ketqua").innerHTML = "Không phải cạnh của tam giác";
        }
    }
}
function cancle() {
    document.getElementById("realnumberA").value = null;
    document.getElementById("realnumberB").value = null;
    document.getElementById("realnumberC").value = null;
    document.getElementById("ketqua").innerHTML = null;

}