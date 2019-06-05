import Component from '../Component.js';

class ChatItem extends Component {

    renderTemplate() {
        const chatroom = this.props.chatroom;

        return /*html*/`
            <li>
                <h2>${chatroom.name} Chatroom</h2>
                <a href="/chat.html"><button>Join Room</button></a>
            </li>
        `;
    }
}

export default ChatItem;            