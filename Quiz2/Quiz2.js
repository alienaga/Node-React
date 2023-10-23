console.log("Soal No 1 : ")
class Score {
	constructor(subject,points,email){
		this.subject=subject;
		this.points=points;
		this.email=email;
	}

}

console.log("Soal No 2 : ")
data = [
	["email","quiz-1","quiz-2","quiz-3"],
	["abduh@mail.com",78,89,90],
	["khairun@mail.com",95,85,88],
	["bondra@mail.com",70,75,78],
	["regi@mail.com",91,89,93],
]
   console.log(data[1][0,0])
function viewScores (data, subject){
var arrObj = {}
 
for(var i=1; i<5;i++){
	if (subject=="quiz-1") {
		nilai=data[i][i,1];
	}else if(subject=="quiz-2"){
		nilai=data[i][i,2];
	}else if(subject=="quiz-3"){
		nilai=data[i][i,3];
	}
		
	alamateamail=data[i][i,0];
	arrObj={
    email:alamateamail,
    subject:subject,
    points:nilai
  };
  console.log(`[{email : ${arrObj.email},subject : ${arrObj.subject}, points : ${arrObj.points}}]`)
}


}
viewScores(data,"quiz-2")
console.log("Soal No 3 : ")

function recapScores(data){
	for (var i=1;i<5;i++){
		console.log(i+". "+data[i][i,0])
		a=data[i][i,1]
		b=data[i][i,2]
		c=data[i][i,3]
		avg=(a+b+c)/3
		if (avg>90) {
			predikat="honour"
		}else if(avg>80){
			predikat="graduate"
		}else if(avg>70){
			predikat="participant"
		}else{
			predikat="Di bawah 70"
		}
		console.log("Rata Rata : "+avg)
		console.log("Predikat : "+predikat)
	}
}
recapScores(data)




