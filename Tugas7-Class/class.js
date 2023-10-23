console.log("Soal No 1 : ")
console.log("Release 0  : ")

class Animal {
      constructor(name) {
    this.nama = name;
  }
  get name() {
    return this.nama;
  }
}
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"


console.log("Release 1  : ")

class Frog extends Animal{
	constructor(name,legs){
		super(name);
	}
	jump(){
		console.log("hop hop")
	}
}

class Ape extends Animal{
	constructor(name,legs){
		super(name);
	}
	yell(){
		console.log("Auooo")
	}
}
var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

console.log("Soal No 2 : ")


class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  



