//Soal If Else
console.log("If-Else");
var Nama="ali";
var Peran="penyihir"; //penyihir, guard, werewolf
var Penyihir="kamu dapat melihat siapa yang menjadi werewolf!";
var Guard="kamu akan membantu melindungi temanmu dari serangan werewolf.";
var Werewolf="Kamu akan memakan mangsa setiap malam!";


if (Peran=="penyihir") {
	Kemampuan=Penyihir;
}else if(Peran=="guard"){
	Kemampuan=Guard;
}else if(Peran=="werewolf"){
	Kemampuan=Werewolf;
}else{
	//maaf Peran atau Kemampuan tidak diisi
	Kemampuan="";
}

if (Nama=="" || Peran=="") {
	if (Nama=="") {
		console.log("Nama harus diisi!");
	}else{
		console.log("Halo "+Nama+", Pilih Peranmu untuk memulai game!");
	}
}else{
console.log("Selamat datang di Dunia Werewolf, "+Nama);
console.log("Halo "+Peran+" "+Nama+","+Kemampuan);
}

//soal Switch Case
console.log("Switch-Case");
var tanggal=9;
var bulan=12; //input bulan harus berupa integer
var tahun=1996;

if (tanggal<1 || tanggal >31) {
	console.log("Mohon masukan tanggal diantara tanggal 1-31");
}else{

}
	switch(bulan) {
		case 1 : 
			bulanString="Januari";
			break;
		case 2 : 
			bulanString="Februari";
			break;
		case 3 :
			bulanString="Maret";
			break;
		case 4 :
			bulanString="April";
			break;
		case 5 : 
			bulanString="Mei";
			break;
		case 6 : 
			bulanString="Juni";
			break;
		case 7 : 
			bulanString="Juli";
			break;
		case 8 :
			bulanString="Agustus";
			break;
		case 9 : 
			bulanString="September";
			break;
		case 10 : 
			bulanString="Oktober";
			break;
		case 11 : 
			bulanString="November";
			break;
		case 12 :
			bulanString="Desember";
			break;
		default : bulanString="NULL";
	}

console.log("Output Tanggal : "+tanggal+" "+bulanString+" "+tahun)

