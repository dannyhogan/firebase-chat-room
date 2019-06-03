import Component from '../Component.js';

class Profile extends Component {

    renderTemplate() {
        const user = this.props.user;

        if(!user) {
            return `<div></div>`;
        }
        const avatar = user.photoURL || '../../assets/default.png';

        return /*html*/`
            <div class="profile">
                <img src="${avatar}">
                <p>Danny Hogan</p>
                <button>Sign Out</button>
            </div>
        `;
    }
}

export default Profile;