console.log("Soal A : ")


function AscendingTen(num) {
var tambah=num;
  for (var i=1; i<10;i++){
  	kali=num+i;
  	tambah=tambah+" "+kali;
  }
  return tambah;
}
var num=10;
console.log(AscendingTen(num));

console.log("Soal B : ")

function DescendingTen(num) {
var tambah=num;
  for (var i=1; i<10;i++){
  	kali=num-i;
  	tambah=tambah+" "+kali;
  }
  return tambah;
}
console.log(DescendingTen(num));

console.log("Soal C : ")
var reference=81;
var check=1;
function ConditionalAscDesc(reference, check) {

	if (reference=="" || check=="") {
		console.log("-1")
	}else if(check%2==0){
  	num=reference;
  	console.log(DescendingTen(num));
  }else{
  	num=reference;
  	console.log(AscendingTen(num));
  }
}
ConditionalAscDesc(reference,check);

console.log("Soal D : ")


function ularTangga1() {
var x=100;
var y="";
	a=x;
  for (var i=1;i<=9;i++){
  	b=x;
  	if (x%20==0) {
  		for(var j=1;j<10;j++){
  		c=x-j
  		b=b+" "+c;
  		}
  	}else{
  		for(var j=9;j>0;j--){
  		c=x-j
  		b=b+" "+c;
  		}
  	}
  	console.log(b);
  	z=i*10;
  	x=a-z;
  }
}

function ularTangga() {
var x=100;
for (var i=1;i<6;i++){
	y=x;
	yj=y;
	for(var j=1;j<10;j++){
		a=yj-j;
		y=y+" "+a;

	}
	x=x-19;
	z=x;
	zk=z;
	for(var k=1;k<10;k++){
		b=zk+k;
		z=z+" "+b;
	}
	console.log(y)
	console.log(z)
	x=x-1;
}
}

ularTangga();