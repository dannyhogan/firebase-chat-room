import ChatItem from '../src/home/ChatItem.js';

const test = QUnit.test;

QUnit.module('Chat item');

test('Returns a chat item from chatroom data', assert => {
    //arrange

    const chatroom = {
        id: '1',
        name: 'Dannys',
        owner: 'doug'
    };

    const expected = `
            <li>
                <h2>Dannys Chatroom</h2>
                <a href="/chat.html"><button>Join Room</button></a>
            </li>`;

    //act
    const chatItem = new ChatItem({ chatroom });
    const result = chatItem.renderTemplate();
    
    //assert
    assert.htmlEqual(result, expected);
});