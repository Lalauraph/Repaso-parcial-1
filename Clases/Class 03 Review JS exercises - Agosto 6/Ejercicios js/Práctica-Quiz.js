//Ejercico 1:Sumar propiedades:Crea una función que tome un array de objetos,
//donde cada objeto representa una persona con propiedades "nombre" y "edad".
//La función debe devolver la suma de las edades de todas las personas en el array.

//1.Crear el array de objetos:
const objects = [
	{ name: 'Sara', age: 12 },
	{ name: 'Marta', age: 15 },
	{ name: 'Pablo', age: 18 },
];

//2. Crear función que tome el array de objetos como parámetro:
const addAges = (objects) => {
	let totalAges = 0; //variable donde se acumulan mis edades
	objects.forEach((element) => {
		//for each: bucle para recorrer el arreglo
		totalAges = totalAges + element.age; //le sumo las edades a la variable totalAges que está en cero.
	});
	return totalAges; //retornar el rsultado
};

//3.Ejecutar la función
addAges(objects);

//4.Imprimir en la consola el resultado de la función
console.log(addAges(objects));

//Ejercicio 2: Filtrar objetos: Crea una función que tome un array de objetos, donde cada objeto representa
//un producto con propiedades "nombre" y "precio". La función debe devolver un nuevo array con los productos
//que tienen un precio mayor a 50.

//1. Crear el array de productos:
const products = [
	{
		name: 'charger',
		price: 65,
	},
	{
		name: 'airpods',
		price: 55,
	},
	{
		name: 'notebook',
		price: 40,
	},
	{
		name: 'lunchbox',
		price: 70,
	},
];

//2.Crear la función:
const filterObjects = (products) => {
	const filteredObjects = []; //crear el array vacio
	for (const product of products) {
		//iterar sobre el array
		if (product.price > 50) {
			//si el precio del producto es menor a 50
			filteredObjects.push(product); //push a products
		}
	}
	return filteredObjects; //que me retorne la función filteredObjects
};

//3.Ejecutar la función:
const filteredObjects = filterObjects(products);

//4.Imprimir resultado en consola:
console.log(filteredObjects);

//Ejercicio 3: Encontrar objeto por propiedad: Crea una función que tome un array de objetos, donde cada objeto
//representa un estudiante con propiedades "nombre" y "calificación". La función debe recibir un nombre y
//devolver el objeto del estudiante con ese nombre, o null si no se encuentra.

//1.Crear el array estudiantes:
const students = [
	{
		name: 'Gabriel',
		grade: '4.5',
	},
	{
		name: 'Daniel',
		grade: '4.0',
	},
	{
		name: 'Cata',
		grade: '3.5',
	},
	{
		name: 'Juliana',
		grade: '2.5',
	},
];

//2.Crear la función
const filterStudents = (name, students) => {
	let studentSelected = ''; //variable que recibe el nombre el cual puede cambiar
	//iterar sobre el arreglo
	for (const student of students) {
		if (student.name === name) {
			//condición: si el nombre del estudiante es igual al nombre que yo le doy como parámetro
			studentSelected = student; //entonces la variable studentselected va a ser igual a ese nombre
		}
	}
	return studentSelected;
};

//3.Ejecutar la función
const SearchedStudent = filterStudents('Daniel', students);

//4.Imprimir en la consola
console.log(SearchedStudent);

//Ejercicio 4: Ordenar Objetos: Crea una función que tome un array de objetos, donde cada
//objeto representa un producto con propiedades "nombre" y "precio", y devuelva un nuevo
//array ordenado por el precio de menor a mayor.

//1.Craer array de objetos
const objectsArray = [
	{
		name: 'charger',
		price: '65',
	},
	{
		name: 'airpods',
		price: '55',
	},
	{
		name: 'notebook',
		price: '40',
	},
	{
		name: 'lunchbox',
		price: '70',
	},
];

//2.Crear la función
const orderProducts = (objectsArray) => {
	return objectsArray.sort((a, b) => a.price - b.price); //retornar objetos del producto organizados de menor a mayor
};

//3.Ejecutar la función
const productsOrdered = orderProducts(objectsArray);
//4.Imprimir en la consola
console.log(productsOrdered);

//Ejercicio 5:Combinar propiedades de objetos: Crea una función que tome dos arrays de objetos,
//donde cada objeto representa una persona con propiedades "nombre" y "edad".
//La función debe devolver un nuevo array combinando las propiedades de ambas personas.

//1.Craer dos arrays de personas
const People1 = [
	{
		name: 'Laura',
		age: 22,
	},
	{
		name: 'Cris',
		age: 19,
	},
];

const People2 = [
	{
		name: 'Carlos',
		age: 15,
	},
	{
		name: 'Ana',
		age: 30,
	},
];

//2.Crear la función
const combinedPeople = (People1, People2) => {
	return People1.concat(People2);
};
//3.Ejecutar la función
const peopleCombined = combinedPeople(People1, People2);
//4.Imprimir en la consola
console.log(peopleCombined);

//Ejercicio 6: Escribe una función en que tome un arreglo de calificaciones numéricas
//de estudiantes y las convierta en su equivalente en letras según el sistema de calificación estándar:
//La función debe recorrer el arreglo original, convertir cada calificación numérica a su equivalente
//en letras, y devolver un nuevo arreglo con las calificaciones en letras.
//A para calificaciones entre 90 y 100.
//B para calificaciones entre 80 y 89.
//C para calificaciones entre 70 y 79.
//D para calificaciones entre 60 y 69.
//F para calificaciones menores a 60.

//1.Crear el areglo de calificaciones
const studentGrades = [100, 50, 65, 70, 85, 96, 45];

//2. Crear la Función
const computeGrades = (studentGrades) => {
	return studentGrades.map((studentGrade) => {
		let gradeLetter;
		switch (true) {
			case studentGrade < 60: //la nota es menor a 60 la variable gradeletter se vuelve F
				gradeLetter = 'F';
				break;
			case studentGrade >= 60 && studentGrade < 70: //Si studentgrade es mayor o igual a 60 y menor que 70
				gradeLetter = 'D';
				break;
			case studentGrade >= 70 && studentGrade < 80: //si studentgrade mayor o igual a 70 y menor a 80
				gradeLetter = 'C';
				break;
			case studentGrade >= 80 && studentGrade < 90: //si studentgrade mayot o igual a 80 y menor que 90
				gradeLetter = 'B';
				break;
			case studentGrade >= 90 && studentGrade <= 100: //si studentgrade mayor o igual a 90 y menor o igual a 100
				gradeLetter = 'A';
				break;
			default:
				gradeLetter = 'Invalid grade'; //Si no cumple nada de lo anterior, entonces manda el mensaje "invalid grade"
		}
		return gradeLetter; // me retorna la variable gradeletter que es la que va a tener almacenada la letra dependiendo del caso
	});
};

//3.Ejecutar la función
const result = computeGrades(studentGrades);
//4.Imorimir en la consola
console.log(result);

//Ejercicio 7: Crea una función que tome un arreglo de objetos que representen libros. Cada libro tiene
//un título, un autor y un año. Retorna todos los libros que fueron publicados después del año 2000 y
//que tienen más de 300 páginas.

//1.Crear el arreglo de libros
const books = [
	{
		title: 'El amor en los tiempos del cólera',
		writer: 'Gabriel García',
		year: 2001,
		length: 350,
	},
	{
		title: 'Bajo la misma estrella',
		writer: 'John Green',
		year: 2014,
		length: 500,
	},
	{
		title: 'Don Quixote',
		writer: 'Miguel de Cervantes',
		year: 1998,
		length: 700,
	},
	{
		title: 'Odisea',
		writer: 'Homero',
		year: 1850,
		length: 350,
	},
];

//2.Crear la función
const modernBooks = (books) => {
	const result = [];
	for (const book of books) {
		if (book.year > 2000 && book.length > 300) {
			result.push(book);
		}
	}
	return result;
};

//3.Ejecutar la función
const booksFound = modernBooks(books);
//4. Imprimir en la consola
console.log(booksFound);

//1.Crear el arreglo de tareas
const homeworks = [
	{
		id: 1,
		description: 'Do homework',
		state: 'completed',
	},
	{
		id: 2,
		description: 'walk dog',
		state: 'not completed',
	},
	{
		id: 3,
		description: 'paint',
		state: 'completed',
	},
	{
		id: 4,
		description: 'drink water',
		state: 'not completed',
	},
	{
		id: 5,
		description: 'fix bed',
		state: 'not completed',
	},
];
//2.Crear la función
const homeworkStatus = (homeworks) => {
	const result = [];
	for (const homework of homeworks) {
		if (homework.id > 2000 && homework.state === completed) {
			result.push(homework);
		}
	}
	return result;
};
//3. Ejecutar la función
const homeworksDone = homeworkStatus(homeworks);
//4. Imprimir en la consola.
console.log(homeworksDone);
