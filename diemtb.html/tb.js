let inputphysics
let inputchemistry
let inputbiology
inputphysics= prompt("enter the physics","");
inputchemistry= prompt("enter the chemistry","");
inputbiology= prompt("enter the biology","");
let physics= parseInt(inputphysics);
let chemistry= parseInt(inputchemistry);
let biology= parseInt(inputbiology);
let area=(physics + chemistry + biology)/3;
document.write("the area is="+ area);