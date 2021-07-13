const value = rand();

const str = value as number;
// console.log(str * 10);

function rand(): string | number {
		return "wowo";

}

enum Shape {
	squre,
	rectangle,
	circle
}

let userShape : Shape = Shape.squre

console.log(Shape.squre)

// -------------------------

type Pair<T> = [T,T]

// let marry: Pair<string> = [10,20]
let marry2 : Pair<string> = ["tmddlr","tksk"]

// ================?

// 인터페이스에 함수도 들어감

interface Printable {
	read() : void
}

const book = {
	name: "stock",
	read : function(){
		console.log(`i am reading a ${this.name} book`)
	}
}

function reader (b:Printable){
	console.log(b.read)
}


// ----------------------------

// const myInp = document.getElementById("my") as HTMLInputElement
// console.log(myInp.value)


export {}