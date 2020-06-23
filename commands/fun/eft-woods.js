module.exports = {
    name: "eft-woods",
    aliases: ["eft-woods"],
    category: "fun",
    description: "Displays the escape from tarkov woods map",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('http://shortify.nl/woods1')
            message.channel.send('https://shortify.nl/woods2')
            message.channel.send('https://shortify.nl/woods3')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}