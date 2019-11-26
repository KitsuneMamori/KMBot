module.exports = {
    name: "info",
    category: "info",
    description: "Displays information about the bot",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');
            var author = 'K. Mamori#6666';
            var thanks = 'ItsTechys#2515'
            var version = '1.0.6';
            var color_main = '0xE000FF';

            const embed = new Discord.RichEmbed()
                .setTitle('__**Bot Info**__')
                .setThumbnail('https://cdn.discordapp.com/avatars/499283712999948298/27c17488e142fef1cce9438a872e8618.png')
                .addField('Version', `Current version: ${version}`)
                .addField('Author', `The creator is ${author}`)
                .addField('Special thanks to:', `${thanks}`)
                .setColor(color_main)

            message.channel.send(embed)
                .then(message => {
                    message.delete(10000)
                })
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}