import Component from '../Component.js';

class Header extends Component {

    renderTemplate() {
        return /*html*/`
            <header>
                <h1>Firebase Chat Room!</h1>
                <h3>Sign in to start chatting!</h3>
            </header>
        `;
    }
}

export default Header;