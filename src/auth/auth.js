import AuthApp from './AuthApp.js';

const root = document.getElementbyId('root');
const app = new AuthApp();
root.appendChild(app.render());