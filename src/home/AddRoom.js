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
            <section class="add-room">
                <h1>Need a room to chat in?</h1>
                <form> 
                    <label>Create your own:</label>
                    <input name="name" required>
                    <button>Add chat room!</button>
                </form>
            </section>
        `;
    }
}

export default AddRoom;