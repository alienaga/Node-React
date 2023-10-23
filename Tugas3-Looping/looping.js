console.log("Soal No 1, Looping While : ")
var i=0
var j=20

while(i<20){
	i=i+2;
	console.log(i+" - I Love Coding");
}
while(j>1){
	console.log(j+" - I will become a mobile developer");
	j=j-2;
}

console.log("Soal No 2, Looping Menggunakan For : ")

var x=1;
var ganjil="Santai";
var genap="Berkualitas";
var KelipatanTiga="I Love Coding";

for(x; x <= 20; x++) {
	if (x % 2 == 0) {
		console.log(x+" - "+genap)
	}else if(x % 3 == 0){
		console.log(x+" - "+KelipatanTiga)
	}else{
		console.log(x+" - "+ganjil)
	}
} 

console.log("Soal No 3, Membuat Persegi Panjang : ");

var x=8;
var y=4;
var pager="#";

while(x>1){
	pager=pager+"#";
	x--;
	
}
while(y>=1){
		console.log(pager);
		y--;
	}
console.log("Soal No 4, Membuat Tangga : ")

var tx=1;
pager="#";

for(tx; tx<=7;tx++){
	console.log(pager);
	pager=pager+"#";
}

console.log("Soal No 5, Membuat Papan Catur : ")

var xx=1;
var xy=2;
var xz=1;
var hitam="#";
var putih=" ";
var hasil="";

for (xx; xx <= 8; xx++) {
	if (xx%2 == 0 ) {
		hasil=hasil+putih;
	}else{
		hasil=hasil+hitam;
	}
	hasila=hasil;
}

hasil="";

for (xy; xy<8; xy++){
	if (xy%2 == 0 ) {
		hasil=hasil+putih;
	}else{
		hasil=hasil+hitam;
	}
	hasilb=hasil;
}


for (xz; xz<=8 ;xz++){
	if (xz%2 ==0) {
		console.log(hasila);
	}else{
		console.log(hasilb);
	}
}

