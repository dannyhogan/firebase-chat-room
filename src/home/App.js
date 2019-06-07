import Component from '../Component.js';
import Header from '../shared/Header.js';
import AddRoom from './AddRoom.js';
import ChatList from '../shared/ChatList.js';
import { chatroomsRef } from '../services/firebase.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const chatList = new ChatList({ chatrooms: [] });
        main.appendChild(chatList.render());

        const addRoom = new AddRoom();
        main.appendChild(addRoom.render());

        chatroomsRef.on('value', snapshot => {
            const chatrooms = snapshot.val() ? Object.values(snapshot.val()) : [];
            chatList.update({ chatrooms });
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