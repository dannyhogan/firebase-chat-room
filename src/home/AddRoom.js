import Component from '../Component.js';
import { auth, chatrooms } from '../services/firebase.js';

class AddRoom extends Component {

    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => {
            event.preventDefault();
            const roomRef = chatrooms.push();
            const formData = new FormData(form);

            const room = {
                key: roomRef.key,
                owner: auth.currentUser.uid,
                name: formData.get('name')
            };

            roomRef.set(room);
            console.log('set room ', roomRef.key);
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form>
                <input name="name" required>
                <button>Add Chat Room!</button>
            </form>
        `;
    }
}

export default AddRoom;