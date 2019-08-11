import Component from '../Component.js';
import { auth, chatroomsRef } from '../services/firebase.js';

class AddRoom extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        const form = dom.querySelector('form');


        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);

            const roomRef = chatroomsRef.push();
            const room = {
                key: roomRef.key,
                owner: auth.currentUser.uid,
                name: formData.get('name')
            };

            roomRef.set(room);

            input.value = '';
        });

        return dom;
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