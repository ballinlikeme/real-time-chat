function countMembers(ws, id) {
    let members = 0;
    ws.clients.forEach(client => {
        if (client.id === id) members++
    })
    return members;
}

module.exports = countMembers;