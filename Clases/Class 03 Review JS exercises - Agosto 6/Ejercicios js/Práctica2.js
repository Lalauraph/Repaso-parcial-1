//Ejercico 1:Sumar propiedades:Crea una función que tome un array de objetos,
//donde cada objeto representa una persona con propiedades "nombre" y "edad".
//La función debe devolver la suma de las edades de todas las personas en el array.
const people = [
	{
		name: 'Laura',
		age: 15,
	},
	{
		name: 'Juan',
		age: 20,
	},
	{
		name: 'Maria',
		age: 10,
	},
];
const addAges = (people) => {
	let totalAges = 0;
	people.forEach((element) => {
		totalAges = totalAges + element.age;
	});
	return totalAges;
};

addAges(people);
console.log(addAges(people));

//Ejercicio 2: Filtrar objetos: Crea una función que tome un array de objetos, donde cada objeto representa
//un producto con propiedades "nombre" y "precio". La función debe devolver un nuevo array con los productos
//que tienen un precio mayor a 50.

const products = [
	{
		name: 'laptop',
		price: 10,
	},
	{
		name: 'prone',
		price: 60,
	},
	{
		name: 'airpods',
		price: 65,
	},
];

const filterProducts = (products) => {
	const filteredProducts = [];
	for (const product of products) {
		if (product.price > 50) {
			filteredProducts.push(product);
		}
	}
	return filteredProducts;
};

const filteredProducts = filterProducts(products);
console.log(filteredProducts);

//Ejercicio 3: Encontrar objeto por propiedad: Crea una función que tome un array de objetos, donde cada objeto
//representa un estudiante con propiedades "nombre" y "calificación". La función debe recibir un nombre y
//devolver el objeto del estudiante con ese nombre, o null si no se encuentra.

const students = [
	{
		name: 'Sofia',
		grade: 5,
	},
	{
		name: 'Esteban',
		grade: 4,
	},
	{
		name: 'Alberto',
		grade: 3,
	},
];

const findStudentGrade = (name, students) => {
	let studentSearched = '';
	for (const student of students) {
		if (student.name === name) {
			studentSearched = student;
		}
	}
	return studentSearched;
};

const studentSearched = findStudentGrade('Alberto', students);
console.log(studentSearched);

//Ejercicio 4: Ordenar Objetos: Crea una función que tome un array de objetos, donde cada
//objeto representa un producto con propiedades "nombre" y "precio", y devuelva un nuevo
//array ordenado por el precio de menor a mayor.

const objetos = [
	{
		nombre: 'cuaderno',
		precio: 5,
	},
	{
		nombre: 'colores',
		precio: 10,
	},
	{
		nombre: 'marcadores',
		precio: 15,
	},
];

const ordernarProductos = (objetos) => {
	return objetos.sort((a, b) => a.precio - b.precio);
};

const ProductosOrdenados = ordernarProductos(objetos);
console.log(ProductosOrdenados);

//Ejercicio 5:Combinar propiedades de objetos: Crea una función que tome dos arrays de objetos,
//donde cada objeto representa una persona con propiedades "nombre" y "edad".
//La función debe devolver un nuevo array combinando las propiedades de ambas personas.
const array1 = [
	{
		name: 'Juan',
		age: 12,
	},
	{
		name: 'Maria',
		age: 10,
	},
];

const array2 = [
	{
		name: 'Sofia',
		age: 8,
	},
	{
		name: 'Dana',
		age: 13,
	},
];

const combineArrays = (array1, array2) => {
	return array1.concat(array2);
};

const combinedArrays = combineArrays(array1, array2);
console.log(combinedArrays);

//Ejercicio 6: Escribe una función en que tome un arreglo de calificaciones numéricas
//de estudiantes y las convierta en su equivalente en letras según el sistema de calificación estándar:
//La función debe recorrer el arreglo original, convertir cada calificación numérica a su equivalente
//en letras, y devolver un nuevo arreglo con las calificaciones en letras.
//A para calificaciones entre 90 y 100.
//B para calificaciones entre 80 y 89.
//C para calificaciones entre 70 y 79.
//D para calificaciones entre 60 y 69.
//F para calificaciones menores a 60.

const grades = [100, 30, 60, 50, 70, 90];

const sortGrades = (grades) => {
	return sortGrades.map((grade) => {
		let gradeLetter;
		switch (true) {
			case grade < 60:
				gradeLetter = 'F';
				break;
			case grade > 60 && grade < 70:
				gradeLetter = 'D';
				break;
			case grade > 70 && grade < 80:
				gradeLetter = 'C';
		}
	});
};

//Ejercicio 7: Crea una función que tome un arreglo de objetos que representen libros. Cada libro tiene
//un título, un autor y un año. Retorna todos los libros que fueron publicados después del año 2000 y
//que tienen más de 300 páginas.

//Ejercicio 8: Crea una función que tome un arreglo de objetos que representen tareas.
//Cada tarea tiene un id, una descripción y un estado (ya sea 'pendiente' o 'completada').
//Retorna un nuevo arreglo con el estado de todas las tareas con id impar a se cambie a 'completada'.
