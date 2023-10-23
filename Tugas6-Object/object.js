console.log("Soal No 1 : ")

var arr=[["Abduh", "Muhamad", "male", 1992], ["Ahmad", "Taufik", "male", 1996]];

function arrayToObject(arr) {
var now = new Date()
var thisYear = now.getFullYear() 
var arrObj = {}
if (arr.length == 0 || !arr) {
	console.log("")
}else{
    for(var i=0;i<2;i++){
    	arrObj ={
    		firstName :  arr[i][0],
    		lasName :  arr[i][1],
    		gender :arr[i][2],
    		age : thisYear-arr[i][3]
    	};
    	if (!arrObj.age || arrObj.age <1) {
    		arrObj.age = "Invalid Birth Year"
    	}
    	console.log(`${i+1}.${arrObj.firstName} ${arrObj.lasName} : {
    		firstName : ${arrObj.firstName},
    		lasName : ${arrObj.lasName},
    		gender : ${arrObj.gender},
    		age : ${arrObj.age}
    		}`)    		
    	}

    }

}

arrayToObject(arr)


console.log("Soal No 2  : ")
var memberId="324193hDew2";
var money=700000;

function shoppingTime(memberId, money) {

	var listPurchased=[["Sepatu Stacattu",1500000],["Baju Zoro",500000],["Baju H&N",250000],["Sweater Uniklooh",175000],["Casing Handphone",50000]]
	var data = [];
	var belanjaan=[];
	var cash=money;

  if (memberId=="" || !memberId){
  	console.log("Mohon maaf, toko X hanya berlaku untuk member saja");
  }else if(money <50000&& !memberId){
  	console.log("Mohon maaf, uang tidak cukup")

  }else{
  	var i=0
  	while (cash>=50000){
  		i++;
  		if (cash>=listPurchased[i][1,1]) {
  			belanjaan.push(listPurchased[i][1,0]);
  			var cash=cash-listPurchased[i][1,1];
  			}
  	}
  	

  	object = {
  			"memberId":memberId,
  			"money":money,
  			"listPurchased":belanjaan,
  			"change":cash
  		}
  		data.push(object)

  }
return data;
}
console.log(shoppingTime(memberId,money))

var listPurchased = {
			}


console.log("Soal No 3 : ")

var listPenumpang=[['Dimitri', 'B', 'F']];
function naikAngkot(listPenumpang){
var	rute = ['A', 'B', 'C', 'D', 'E', 'F'];



for (var i=0;i<listPenumpang.length;i++){
	var berangkat=listPenumpang[0][i,1];
	var tujuan=listPenumpang[0][i,2];
	var a=0;
	var b=0;

	switch(berangkat){
		case "A" : 
			a=1
			break;
		case "B" : 
			a=2
			break;
		case "C" : 
			a=3
			break;
		case "D" : 
			a=4
			break;
		case "E" : 
			a=5
			break;
		case "F" : 
			a=6
			break;
		default : bulanString="NULL";
	}
	switch(tujuan){
		case "A" : 
			b=1
			break;
		case "B" : 
			b=2
			break;
		case "C" : 
			b=3
			break;
		case "D" : 
			b=4
			break;
		case "E" : 
			b=5
			break;
		case "F" : 
			b=6
			break;
		default : bulanString="NULL";
	}

	hitungan=b-a;
	bayar=hitungan*2000;

console.log(`{penumpang : ${listPenumpang[0][i,0]}, naikDari : ${berangkat},tujuan : ${tujuan},bayar : ${bayar} }`)    		
    	}

}


naikAngkot(listPenumpang)