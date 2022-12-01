function globalBroadcast (ws, msg) {
    ws.clients.forEach(client => {
        if (client.id === msg.roomId) {
            const msgToSend = JSON.stringify(msg);
            client.send(msgToSend);
        }
    }) 
}

module.exports = globalBroadcast;