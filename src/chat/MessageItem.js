import Component from '../Component.js';

class MessageItem extends Component {

    renderTemplate() {
        return /*html*/`
            <li class="message-item">
                <p class="user">Danny Hogan</p>
                <p class="timestamp">@ 12-10-2019 8:15PM:</p>
                <p class="message">What up party people</p>
            </li>
        `;
    }
}

export default MessageItem;