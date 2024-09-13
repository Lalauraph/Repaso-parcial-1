//Tipos de datos en Javascript - Data types
String;
Number;
Boolean;
Array;
undefined;
Object;
null; //dejar la variable vacia , es un tipo de dato

//Variables
// const //no cambia
// let //variables que van a cambiar a lo largo del código

const name = 'Juan'; //string
const id = 1244; //number
const isBig = true; // boolean
const ids = [123, 125, 1266]; // array
const dog = {
	name: 'Andy',
	age: 12,
}; //object

// const var1; //undefined: no se le define nada, no tiene ningun tipo de dato
const var2 = null; //undefined

console.log(typeof name); // typeof es para saber de qué tipo es la variable - va a decir que es string
console.log(typeof dog); //object

//Estructuras-flujos de control - low control structures: para manejar dondicionales

//1.if: si la condicion se cumpñle lo de adentro tambien
if (condition) {
}

//2.if else
if (condition) {
	//si se cumple
} else {
	//si no se cumple
}

//3.while
while (condition) {
	//mientras se cumpla
}

//4. for-ciclo-bucle - recorre algo
for (let index = 0; index < 5; index++) {
	//index++: sumarle 1
	//mientras index sea menor a 5
}

//5.switch
switch (dog) {
	case 'andy':
		//hacer algo
		break;

	case 'zoe':
		//hacer algo
		break; //detiene el código

	default:
		//hacer algo por defecto
		break;
}

//6. for each
array.forEach((element) => {});

//manejo de objetos: dog.name  accedemos a las propiedades de los objetos con el punto.
console.log(dog.name);

//objeto: persona que tiene caracteristicas

//funciones: órdenes que se dan - se deben activarse-ejecutarse-llamarla
function sum(a, b) {
	//crear orden
	return a + b;
}
sum(); //ejecutar la orden

//tipo flecha
const myFunctionArrow = (a, b) => {
	return a + b;
};

const myFunctionArrow2 = (a, b) => a + b; //return a+b
