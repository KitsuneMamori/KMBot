module.exports = {
    name: "eft-factory",
    aliases: ["eft-factory"],
    category: "fun",
    description: "Displays the escape from tarkov factory map",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('http://shortify.nl/factory1')
            message.channel.send('https://shortify.nl/factory2')
            message.channel.send('https://shortify.nl/factory3')
            message.channel.send('https://shortify.nl/factory4')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}