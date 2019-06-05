import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from './AddRoom.js';
import { chatrooms } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const addRoom = new AddRoom();
        main.appendChild(addRoom.render());

        chatrooms.on('value', snapshot => {
            console.log(snapshot.val());
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/`
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;