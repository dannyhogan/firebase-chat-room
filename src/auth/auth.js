import AuthApp from './AuthApp.js';

const root = document.getElementById('root');
const app = new AuthApp();
root.appendChild(app.render());