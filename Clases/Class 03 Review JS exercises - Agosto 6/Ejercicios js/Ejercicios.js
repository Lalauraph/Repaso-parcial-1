//1.Sumar propiedades:Crea una función que tome un array de objetos,
//donde cada objeto representa una persona con propiedades "nombre" y "edad".
//La función debe devolver la suma de las edades de todas las personas en el array.

//Definir arreglo llamado "People" con los objetos y sus propiedad name y age
const People = [
	{
		name: 'Laura',
		age: 22,
	},
	{
		name: 'Paula',
		age: 19,
	},
	{
		name: 'Salomé',
		age: 19,
	},
];

// Definir una función llamada SumarEdades que toma un array de personas como parámetro.
const SumarEdades = (People) => {
	// Crear una variable "total" para acumular las edades
	let total = 0;

	People.forEach((element) => {
		//Bucle For each para recorrer el arreglo de personas

		total = total + element.age; //Sumar la propiedad age de cada estudiante a la variable "total" que esta en ceros
	});
	return total; //Devolver suma total
};

SumarEdades(People); // Llamar la función SumarEdades con el array Students -"Hágalo"-EJECUTARLA

console.log(SumarEdades(People)); // Imprimir en la consola el resultado de la función SumarEdades para poder ver el total

//2.Filtrar objetos: Crea una función que tome un array de objetos, donde cada objeto representa un
//producto con propiedades "nombre" y "precio". La función debe devolver un nuevo array con los productos
//que tienen un precio mayor a 50.

//Definir el array de objetos con sus propiedad: nombre y precio

const objects = [
	{
		name: 'Computer',
		price: 20,
	},
	{
		name: 'Cellphone',
		price: 150,
	},
	{
		name: 'Dyson',
		price: 30,
	},
	{
		name: 'Ipad',
		price: 250,
	},
];

// Definir la Función FiltrarObjetos que toma un array de "objetos" como parámetro.
const FiltrarObjetos = (objects) => {
	// Crear un array vacío llamado ObjetosFiltrados.
	const ObjetosFiltrados = []; //esto es un array vacío []
	// Uso de un bucle for...of para recorrer (iterar) cada objeto en el array de Objetos.
	for (const object of objects) {
		if (object.price < 50) {
			// Mira si el precio de cada objeto es menor a 50.
			ObjetosFiltrados.push(object); // Si es así, agrega el objeto al array ObjetosFiltrados.
		}
	}
	return ObjetosFiltrados; // Devuelve el array ObjetosFiltrados lleno de la condición que le dije
};
const ObjetosFiltrados = FiltrarObjetos(objects); //Llamar a la función FiltrarObjetos con el array Objetos
console.log(ObjetosFiltrados); //Imprimir  en la consola para ver resultado

// //otra forma usando for each:
// const Filteredobjects = (objects) => {
// 	const ObjetosFiltrados = []; //array vacio
// 	objects.forEach((object) => {
// 		if (object.price < 50) {
// 			ObjetosFiltrados.push(object);
// 		}
// 	});
// 	return ObjetosFiltrados;
// };

//3.Encontrar objeto por propiedad: Crea una función que tome un array de objetos, donde cada objeto representa un
//estudiante con propiedades "nombre" y "calificación". La función debe recibir un nombre y devolver el objeto del
//estudiante con ese nombre, o null si no se encuentra.

const students = [
	{
		name: 'Laura',
		grade: 5.0,
	},
	{
		name: 'Andres',
		grade: 4.5,
	},
	{
		name: 'Juan',
		grade: 3.5,
	},
	{
		name: 'Jose',
		grade: 2.5,
	},
];

const FilterStudents = (name, students) => {
	let studentSelected = '';
	students.forEach((student) => {
		if (student.name === name) {
			studentSelected = student;
		}
	});
	return studentSelected;
};
const SearchedStudent = FilterStudents('Laura', students);
console.log(SearchedStudent);

//4.Ordenar Objetos: Crea una función que tome un array de objetos, donde cada objeto representa un producto
// con propiedades "nombre" y "precio", y devuelva un nuevo array ordenado por el precio de menor a mayor.

const Products = [
	{
		name: 'Computer',
		price: 20,
	},
	{
		name: 'Cellphone',
		price: 150,
	},
	{
		name: 'Dyson',
		price: 30,
	},
	{
		name: 'Ipad',
		price: 250,
	},
];

const OrderProducts = (Products) => {
	return Products.sort((a, b) => a.price - b.price);
};
const OrderedProducts = OrderProducts(Products);
console.log(OrderedProducts);

//Por que no toca crear un arreglo vacío?

//5.Combinar propiedades de objetos: Crea una función que tome dos arrays de objetos,
//donde cada objeto representa una persona con propiedades "nombre" y "edad".
//La función debe devolver un nuevo array combinando las propiedades de ambas personas.

const People1 = [
	{
		nombre: 'Laura',
		edad: 22,
	},
	{
		nombre: 'Cris',
		edad: 19,
	},
];

const People2 = [
	{
		nombre: 'Carlos',
		edad: 15,
	},
	{
		nombre: 'Ana',
		edad: 30,
	},
];

const combinePeople = (People1, People2) => {
	return People1.concat(People2);
};

const combinedPeople = combinePeople(People1, People2);
console.log(combinedPeople);
