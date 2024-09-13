//Ejercicio 1: Actualizar un arreglo de objetos basado en una condición
//Tienes un arreglo de objetos que representan tareas, cada una con un id, nombre,
//y completada (un booleano). Escribe una función que tome el id de una tarea y marque
//esa tarea como completada (es decir, completada debe ser true).
//1.Craer el arreglo
const tasks = [
	{
		id: 1,
		name: 'Do math homework',
		completed: 'false',
	},
	{
		id: 2,
		name: 'Take Toby for a walk',
		completed: 'false',
	},
	{
		id: 3,
		name: 'Get my nails done',
		completed: 'false',
	},
];
//2.Crear la función
const markTask = (id, tasks) => {
	for (const task of tasks) {
		if (task.id === id) {
			task.completed = true;
			return task;
		}
	}
	return null;
};

//3.Ejecutar la función
const idSelected = markTask(1, tasks);

//4.Imprimir en la consola
console.log(idSelected);

//Ejercicio 2: Encontrar el objeto con el valor máximo de una propiedad
//Dado un arreglo de objetos que representan ciudades con su respectiva población,
// escribe una función que encuentre y devuelva la ciudad con la mayor población.
//1.Craer el arreglo

const cities = [
	{
		city: 'Cali',
		population: 12.456,
	},
	{
		city: 'New York',
		population: 15.986,
	},
	{
		city: 'París',
		population: 30.987,
	},
];
//2.Crear la función
const biggestCity = (cities) => {
	let bigCity = cities[0];
	for (const city of cities) {
		if (city.population > bigCity.population) {
			bigCity = city;
		}
	}
	return bigCity;
};
//3. Ejecutar la función
const biggestCityFound = biggestCity(cities);
//4.Imprimir resultado en consola
console.log(biggestCityFound);
