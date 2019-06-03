import Profile from '../src/shared/Profile.js';
const test = QUnit.test;

QUnit.module('Profile component');

test('creates correct html from user prop', assert => {
    //arrange
    const user = {
        displayName: 'Danny Hogan',
        photoURL: 'http://via.placeholder.com/50'
    };

    const expected = `
        <div class="profile">
            <img src="http://via.placeholder.com/50">
            <p>Danny Hogan</p>
            <button>Sign Out</button>
        </div>`;
    //act
    const profile = new Profile(user);
    const rendered = profile.renderTemplate();

    //assert
    assert.htmlEqual(rendered, expected);
}); 