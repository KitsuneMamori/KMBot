module.exports = {
    name: "eft-interchange",
    aliases: ["eft-interchange"],
    category: "fun",
    description: "Displays the escape from tarkov interchange map",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('http://shortify.nl/inchange1')
            message.channel.send('https://shortify.nl/inchange2')
            message.channel.send('https://shortify.nl/inchange3')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}