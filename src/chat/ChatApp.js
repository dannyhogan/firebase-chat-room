import '../utils/check-auth.js';
import Component from '../Component.js';
import Header from '../shared/Header.js';
import ChatList from '../shared/ChatList.js';
import MessageList from './MessageList.js';
import { chatroomsRef, messagesRef } from '../services/firebase.js';
import QUERY from '../QUERY.js';

class ChatApp extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        dom.insertBefore(header.render(), main);

        const chatList = new ChatList({ chatrooms: [] });
        main.appendChild(chatList.render());

        const query = QUERY.parse(window.location.search.slice(1));

        const messageList = new MessageList({ key: query.key, messages: [] });
        main.appendChild(messageList.render());

        chatroomsRef.on('value', snapshot => {
            const chatrooms = snapshot.val() ? Object.values(snapshot.val()) : [];
            chatList.update({ chatrooms });
        });

        messagesRef.child(query.key).on('value', snapshot => {
            const messages = Object.values(snapshot.val());
            messageList.update({ messages });
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