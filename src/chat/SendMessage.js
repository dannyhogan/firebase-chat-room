import Component from '../Component.js';
import { messagesRef, auth } from '../services/firebase.js';

class SendMessage extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');
        
        // Auto focuses cursor in input field.
        setTimeout(() => {
            input.focus();
        }, 0);

        const key = this.props.key;

        let photoURL;
        if(!auth.currentUser.photoURL) {
            photoURL = '../../assets/default.png';
        } else {
            photoURL = auth.currentUser.photoURL;
        }

        form.addEventListener('submit', event => {
            event.preventDefault();
            messagesRef.child(key)
                .push()
                .set({
                    message: input.value,
                    uid: auth.currentUser.uid,
                    photoURL: photoURL,
                    displayName: auth.currentUser.displayName,
                    date: new Date().toISOString()
                });

        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="send-message">
                <input placeholder="Enter a message and start chatting!">
                <button>Send Message</button>
            </form>
        `;
    }
}

export default SendMessage;