module.exports = {
    name: "eft-lab",
    aliases: ["eft-lab"],
    category: "fun",
    description: "Displays the escape from tarkov lab map",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('http://shortify.nl/labb1')
            message.channel.send('https://shortify.nl/labb3')
            message.channel.send('https://shortify.nl/labb4')
            message.channel.send('https://shortify.nl/labb5')
            message.channel.send('https://shortify.nl/labb6')
            message.channel.send('https://shortify.nl/labb7')
            message.channel.send('https://shortify.nl/labb8')
            message.channel.send('https://shortify.nl/labb9')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}