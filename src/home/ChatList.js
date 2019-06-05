import Component from '../Component.js';
import ChatItem from './ChatItem.js';

class ChatList extends Component {

    render() {
        const list = this.renderDOM();

        const chatrooms = this.props.chatrooms;

        chatrooms.forEach(chatroom => {
            const chatItem = new ChatItem({ chatroom });
            list.appendChild(chatItem.render());
        });

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="chat-list"></ul>
        `;
    }
}

export default ChatList;