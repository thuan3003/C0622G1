let min;
let max;
let size=Number(prompt("kích cở của mảng:"));
let numbers= new Array(size);
function sumarray(size){
    let sum=0;
    for(i=0; i<size.length;i++){
        sum += size[i];
        document.write(sum);
    }
}
let maxInnumbers= Math.max.apply(Math, numbers);
document.write("giá trị lớn nhất:" + maxInnumbers + "<br>");