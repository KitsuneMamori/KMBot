module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
        try {
            const msg = await message.channel.send(`🏓 Pinging....`);
            message.delete()
            
            msg.edit(`🏓 Pong!
            Latency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms
            API Latency is ${Math.round(client.ping)}ms`);
            msg.delete(5000)
        } catch(e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}
