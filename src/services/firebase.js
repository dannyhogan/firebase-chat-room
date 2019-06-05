const config = {
    apiKey: 'AIzaSyDZq4IzXcNhxMEY4-zXaaPIb0p55tGB4nI',
    authDomain: 'chat-room-dde6b.firebaseapp.com',
    databaseURL: 'https://chat-room-dde6b.firebaseio.com',
    projectId: 'chat-room-dde6b',
    storageBucket: 'chat-room-dde6b.appspot.com',
    messagingSenderId: '202328850697',
    appId: '1:202328850697:web:99fef7a6f642e467'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const chatrooms = db.ref('chatrooms');