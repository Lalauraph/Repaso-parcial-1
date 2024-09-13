import '../TaskItem/TaskItem.js';

class TaskList extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.tasks = []; //arreglo vacío donde se van a guardar las tareas
	}

	//aqui hago la funcionalidad del componente
	connectedCallback() {
		this.render();

		const form = this.shadowRoot.querySelector('.task-form');
		form.addEventListener('submit', (e) => {
			e.preventDefault(); //para que cuando envie el formulario no se reinicie la pagina
			alert('task added'); //lo que sale cuando envio el formulario

			//se deben capturar los datos de los inputs (titulo y descripcion)
			const title = this.shadowRoot.querySelector('.input-title').value;
			const description = this.shadowRoot.querySelector('.input-description').value;

			//pushearle al arreglo de arriba el objeto de la tarea
			this.tasks.push({ title, description, state: false });

			this.addTask({ title, description, state: false });
			//falso porque cuando apenas agrego una tarea, el estado es que no esta completado, luego cambia a true
			form.reset(); //funcion para resetear campos del formulario al enviarse
		});
	}

	render() {
		this.shadowRoot.innerHTML = `
        <h2>Task List</h2>
        <form class="task-form">
            <input type="text" placeholder="Titulo" class="input-title" required>
            <input type="text" placeholder="Descripcion" class="input-description" required>
            <button>Agregar tarea</button>
        </form>
        <ul class="tasks-container">
        </ul>
        `;

		this.tasks.forEach((task) => this.addTask(task));
	}

	addTask({ title, description, state }) {
		const tasksContainer = this.shadowRoot.querySelector('.tasks-container');
		tasksContainer.innerHTML += `
        <task-item title="${title}" description="${description}" state="${state}"></task-item>
        `;

		// const taskItem = document.createElement('task-item')
		// taskItem.setAttribute('title', title)
		// taskItem.setAttribute('description', description)
		// taskItem.setAttribute('state', state)

		// this.shadowRoot.querySelector('.tasks-container').appendChild(taskItem)
	}
}

customElements.define('task-list', TaskList);
export default TaskList;
