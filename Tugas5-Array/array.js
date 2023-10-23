console.log("Nomor 1 : ")
var startNum=10;
var finishNum=1;
function range(startNum, finishNum) {
	var urut=[];
	if (startNum>finishNum){
		for (var i=startNum;i>=finishNum;i--){
			urut.push(i);
		}
		return urut;
	}else if (startNum<finishNum){
		for (var i=startNum;i<=finishNum;i++){
			urut.push(i);
		}
		return urut;
	}else{
		urut.push("-1")
	}
}
console.log(range(startNum,finishNum));

console.log("Nomor 2 : ")

function rangeWithStep(startNum, finishNum, step) {
		var lompat=[];
	if (startNum>finishNum){
		for (var i=startNum;i>=finishNum;i=i-step){
			lompat.push(i);
		}
		return lompat;
	}else if (startNum<finishNum){
		for (var i=startNum;i<=finishNum;i=i-step){
			lompat.push(i);
		}
		return lompat;
	}else{
		lompat.push("-1")
	}
}

var step=2;

console.log(rangeWithStep(startNum,finishNum,step));

console.log("Nomor 3 : ")
function sum(startNum,finishNum,step){
	var jumlah=0;
	if (startNum>finishNum){
		for (var i=startNum;i>=finishNum;i=i-step){
			jumlah=jumlah+i;
		}
		return jumlah;
	}else if (startNum<finishNum){
		for (var i=startNum;i<=finishNum;i=i-step){
			jumlah=jumlah+i;
		}
		return jumlah;
	}
}

console.log(sum(startNum,finishNum,step))

console.log("Nomor 4 : ")
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ] 

 function dataHandling(){
 	var a=0;
	var b=input.length;
		for (a;a<b;a++){
			console.log("Nomor ID : "+input [a][a,0]);
			console.log("Nama Lengkap: "+input [a][a,1]);
			console.log("TTL: "+input [a][a,2]+" "+input [a][a,3]);
			console.log("Hobby: "+input [a][a,4]);
			console.log("")
			}
 }

 dataHandling();

console.log("Nomor 5 : ")
var balik="CobaCoba"
function balikKata(balik){
var cetakbalik="";
var panjang=balik.length;
panjang=panjang-1;
console.log(panjang);
	for (var i=panjang;i>=0;i--){
		cetakbalik=cetakbalik+balik[i];
	}
	console.log(cetakbalik);
}
balikKata(balik);

console.log("Nomor 6 : ");


function dataHandling2(input){
	array6=input;
	console.log(" Array Awal Awal : ");
	console.log(array6);
	//splice
	array6.splice(1,1,"Roman Alamsyah Elsharawy");
	array6.splice(2,1,"Provinsi Bandar Lampung");
	array6.splice(4,1,"Pria","SMA Internasional Metro");

	console.log("Array Modif : ");
	console.log(array6);

	tanggal=array6[0,3];
	tanggal1=tanggal.split("/")
	switch(tanggal1[1]) {
		case "01" : 
			bulanString="Januari";
			break;
		case "02" : 
			bulanString="Februari";
			break;
		case "03" :
			bulanString="Maret";
			break;
		case "04" :
			bulanString="April";
			break;
		case "05" : 
			bulanString="Mei";
			break;
		case "06" : 
			bulanString="Juni";
			break;
		case "07" : 
			bulanString="Juli";
			break;
		case "08" :
			bulanString="Agustus";
			break;
		case "09" : 
			bulanString="September";
			break;
		case "10" : 
			bulanString="Oktober";
			break;
		case "11" : 
			bulanString="November";
			break;
		case "12" :
			bulanString="Desember";
			break;
		default : bulanString="NULL";
	}
	console.log("Bulan : "+bulanString);

	tanggal2=tanggal1.sort(function (a,b) {return b-a})
	console.log("Sort Tanggal Desc : ")
	console.log(tanggal2)

	tanggal3=tanggal1.join("-");
	tanggal3=tanggal1[1]+"-"+tanggal1[2]+"-"+tanggal1[0];
	console.log("Tanggal Split :  "+tanggal3)

	console.log("Slice 15 Karakter : "+array6[1].slice(0,15))




}



var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);