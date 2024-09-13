import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super(); //permite acceder a los atributos del html
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		//funciion que se ejecuta la primera vez que se monta el componente
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
        <h1>App Container</h1>
        <task-list></task-list>
        `;
	}
}

customElements.define('app-container', AppContainer);
