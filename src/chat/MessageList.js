import Component from '../Component.js';
import MessageItem from './MessageItem.js';
import SendMessage from './SendMessage.js';

class MessageList extends Component {

    render() {
        const dom = this.renderDOM();
        const list = dom.querySelector('ul');

        const messages = this.props.messages;

        messages.forEach(message => {
            const messageItem = new MessageItem({ message });
            list.appendChild(messageItem.render());
        });

        setTimeout(() => {
            list.scrollTop = list.scrollHeight;
        }, 0);

        const key = this.props.key;
        const sendMessage = new SendMessage({ key });
        dom.appendChild(sendMessage.render());

        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <section class="message-list-container">
            <ul class="message-list"></ul>
        </section>
        `;
    }
}

export default MessageList;