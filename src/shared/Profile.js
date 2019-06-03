import Component from '../Component.js';

class Profile extends Component {

    renderTemplate() {
        return /*html*/`
            <div class="profile">
                <img src="http://via.placeholder.com/50">
                <p>Danny Hogan</p>
                <button>Sign Out</button>
            </div>
        `;
    }
}

export default Profile;