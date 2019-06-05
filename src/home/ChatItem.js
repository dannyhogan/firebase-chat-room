import Component from '../Component.js';
import { auth } from '../services/firebase.js';

class ChatItem extends Component {

    render() {
        const item = this.renderDOM();  
        const onRemove = this.props.onRemove;
        const removeButton = item.querySelector('#remove');

        removeButton.addEventListener('click', () => {
            onRemove(this.props.chatroom);
        });

        return item;
    }

    renderTemplate() {
        const chatroom = this.props.chatroom;

        return /*html*/`
            <li class="chat-item">
                <h2>${chatroom.name} Chatroom -</h2>
                <a href="/chat.html?key=${chatroom.key}"><button>Join Room</button></a>
                <button class="${auth.currentUser.uid === chatroom.owner ? '' : 'disabled'}" id="remove">Delete</button>
            </li>
        `;
    }
}

export default ChatItem;            