import '../utils/check-auth.js';
import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from '../shared/ChatList.js';
import MessageList from './MessageList.js';
import { chatroomsRef } from '../services/firebase.js';

class ChatApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const chatList = new ChatList({ chatrooms: [] });
        main.appendChild(chatList.render());

        const messageList = new MessageList();
        main.appendChild(messageList.render());

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

export default ChatApp;