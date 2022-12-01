const ws = require('ws');
const globalBroadcast = require('./js/broadcast');
const countMembers = require('./js/countMembers')

const wss = new ws.Server({
    port: 5000,
}, () => console.log('Server is on, port ' + 5000));

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        message = JSON.parse(message);
        ws.id = message.roomId;
        switch(message.event) {
            case "message":
                globalBroadcast(wss, message);
                break;
            
            case "connection":
                console.log(message);
                message.members = countMembers(wss, message.roomId);
                globalBroadcast(wss, message);
                break;
        }
    })
})

const message = {
    event: 'message/connection',
    id: 1,
    roomId: 1,
    date: "21.10.2022",
    username: "ballinlikeme",
    message: "msg"
}