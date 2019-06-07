import Component from '../Component.js';

class MessageItem extends Component {

    renderTemplate() {
        const message = this.props.message;
        const date = message.date.split('T')[0];

        return /*html*/`
            <li class="message-item">
                <img class="user-image" src="${message.photoURL}">
                <section class="message-details">
                    <p class="user">${message.displayName}</p>
                    <p class="timestamp">${date}</p>
                </section>
                <p class="colon">-</p>
                <p class="message">${message.message}</p>
            </li>
        `;
    }
}

export default MessageItem;