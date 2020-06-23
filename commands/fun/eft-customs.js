module.exports = {
    name: "eft-customs",
    aliases: ["eft-customs"],
    category: "fun",
    description: "Displays the escape from tarkov customs map",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('http://shortify.nl/Customs1')
            message.channel.send('https://shortify.nl/customs6')
            message.channel.send('https://shortify.nl/customs3')
            message.channel.send('https://shortify.nl/customs4')
            message.channel.send('https://shortify.nl/customs5') 
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}