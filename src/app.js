import './styles.css';

const ws = new WebSocket('wss://fep-app.herokuapp.com/');
const nameInput = document.querySelector('#nameInput');
const messageInput = document.querySelector('#messageInput');

document.addEventListener('submit', sendMsg);

ws.onmessage = onSocketMassage;

function sendMsg(e) {
    e.preventDefault();
      ws.send(
        JSON.stringify({
            action: 'message',
            payload: {
                author: nameInput.value,
                message: messageInput.value
            }
        })
    );
    
}


    function onSocketMassage(message) {
        const packetData = JSON.parse(message.data);
        let messageHTML = document.createElement('div');
        messageHTML.innerHTML = `<b>${packetData.payload.author}:</b> ${packetData.payload.message}`;

        document.querySelector('#listMessages').append(messageHTML);
  }