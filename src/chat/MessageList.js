import Component from '../Component.js';
import MessageItem from './MessageItem.js';


class MessageList extends Component {

    render() {
        const list = this.renderDOM();

        for(let i = 0; i < 5; i++) {
            const messageItem = new MessageItem();
            list.appendChild(messageItem.render());
        }

        return list;
    }

    renderTemplate() {
        return /*html*/`
            <ul class="message-list"></ul> 
        `;
    }
}

export default MessageList;