import Component from '../Component.js';
import { auth, chatroomsRef } from '../services/firebase.js';

class AddRoom extends Component {

    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => {
            event.preventDefault();
            const roomRef = chatroomsRef.push();
            const formData = new FormData(form);

            const room = {
                key: roomRef.key,
                owner: auth.currentUser.uid,
                name: formData.get('name')
            };

            roomRef.set(room);
            form.reset();
        });

        return form;
    }

    renderTemplate() {
        return /*html*/`
            <form class="add-room"> 
                <label>Name your room:</label>
                <input name="name" required>
                <button>Add a chat room!</button>
            </form>
        `;
    }
}

export default AddRoom;