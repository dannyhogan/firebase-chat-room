import ChatItem from '../src/shared/ChatItem.js';

const test = QUnit.test;

QUnit.module('Chat item');

test('Returns a chat item from chatroom data', assert => {
    //arrange

    const chatroom = {
        key: '1',
        name: 'Dannys',
        owner: 'doug'
    };

    const expected = `<div></div>`;

    //act
    const chatItem = new ChatItem({ chatroom });
    const result = chatItem.renderTemplate();
    
    //assert
    assert.htmlEqual(result, expected);
});