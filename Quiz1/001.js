console.log("Soal A : ")

console.log("Nomor 5 : ")
var balik="JavaScript"
function balikKata(balik){
var cetakbalik="";
var panjang=balik.length;
panjang=panjang-1;
	for (var i=panjang;i>=0;i--){
		cetakbalik=cetakbalik+balik[i];
	}
	console.log(cetakbalik);
}
balikKata(balik);


console.log("Soal B : ")
var checkpalindrome="katak"
function palindrome(checkpalindrome){
	pisah=checkpalindrome;
	var cetakbalik="";
	var panjang=checkpalindrome.length;
	panjang=panjang-1;
	for (var i=panjang;i>=0;i--){
		cetakbalik=cetakbalik+checkpalindrome[i];
	}
	if (cetakbalik==checkpalindrome) {
		console.log(checkpalindrome+" Adalah Kata Palindrome");
	}else{
		console.log(checkpalindrome+" Adalah Bukan Palindrome");
	}
}

palindrome(checkpalindrome)

console.log("Soal C :  ")
var num1=5;
var num2=-1;

function bandingkan(num1,num2){
if (num1<0 || num2<0) {
	return -1;
}else if(num1<num2){
	return num2;
}else if(num1>num2){
	return num1;
}else{
	return -1;
}
}
console.log(bandingkan(num1,num2))