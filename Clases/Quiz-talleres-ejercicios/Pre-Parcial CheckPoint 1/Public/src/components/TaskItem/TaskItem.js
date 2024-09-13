class TaskItem extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['title', 'description', 'state'];
	}

	connectedCallback() {
		this.render();
	}

	//como va a ser dinamico, necesitamos escuchar los cambios, cuando cambien los atributos
	attributeChangedCallback(propName, oldValue, newValue) {
		this.render();
		if (oldValue !== newValue) {
			this[propName] = propName === 'state' ? newValue === true : newValue;
			this.render();
		}
	}

	//cambia el estado de la tarea de trua a false y al contrario
	toggleTask() {
		this.state = !this.state;
		this.render();
	}

	render() {
		//contenedor de las tareas es una lista, elemento de render sera un elemento de lista
		this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="./src/components/TaskItem/TaskItem.css">
    <li class=${this.state ? 'completed' : 'task'}>
	    <h3>${this.title}</h3>
		<p>${this.description}</p>
		<p>${!this.state ? 'Pending' : 'done'}</p>
		<input type="checkbox" ${this.state ? 'checked' : ''} class="task-checkbox">
		</li>
    `;
		const checkbox = this.shadowRoot.querySelector('.task-checkbox');
		checkbox.addEventListener('change', () => this.toggleTask());
	}
}

customElements.define('task-item', TaskItem);
export default TaskItem;
