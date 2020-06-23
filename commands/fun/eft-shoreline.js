module.exports = {
    name: "eft-shoreline",
    aliases: ["eft-shoreline"],
    category: "fun",
    description: "Displays the escape from tarkov shoreline map",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('http://shortify.nl/shoreline1')
            message.channel.send('https://shortify.nl/shoreline2')
            message.channel.send('https://shortify.nl/shoreline3')
            message.channel.send('https://shortify.nl/shoreline4')
            message.channel.send('https://shortify.nl/shoreline5')
            message.channel.send('https://shortify.nl/shoreline6')
            message.channel.send('https://shortify.nl/shoreline7')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}