console.log("No 1 : ");
function teriak() {
  return "Halo Sanbers!";
}
console.log(teriak());

console.log("No 2 : ");

function kalikan(num1,num2){
	return num1 * num2;
}

var num1=12;
var num2=4;

console.log(kalikan(num1,num2));

console.log("No 3 : ");

function introduce (name,age,address,hobby){
	return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!"
}
var name="Ali";
var age="24";
var address="Jl. Randublatung KM 5 Cepu";
var hobby="Tidur"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan  