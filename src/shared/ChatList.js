import Component from '../Component.js';
import ChatItem from './ChatItem.js';
import { chatroomsRef } from '../services/firebase.js';

class ChatList extends Component {

    render() {
        const list = this.renderDOM();

        const chatrooms = this.props.chatrooms;

        chatrooms.forEach(chatroom => {
            const chatItem = new ChatItem({ 
                chatroom,
                onRemove:(chatroom => {
                    chatroomsRef.child(chatroom.key).remove();
                })
            });

            list.appendChild(chatItem.render());
        });
        

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="chat-list">
                <li class="join-room">
                    <h1 class="join-room-h1">Join an existing room:</h1>
                </li>
            </ul>
        `;
    }
}

export default ChatList;