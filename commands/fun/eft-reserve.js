module.exports = {
    name: "eft-reserve",
    aliases: ["eft-reserve"],
    category: "fun",
    description: "Displays the escape from tarkov reserve map",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('http://shortify.nl/reserve1')
            message.channel.send('https://shortify.nl/reserve3')
            message.channel.send('https://shortify.nl/reserve4')
            message.channel.send('https://shortify.nl/reserve5')
            message.channel.send('https://shortify.nl/reserve6')
            message.channel.send('https://shortify.nl/reserve7')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}