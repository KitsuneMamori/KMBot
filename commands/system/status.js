module.exports = {
    name: "status",
    category: "system",
    description: "Displays the status of the bot",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');
            var color_main = '0xE000FF';

            const embed = new Discord.RichEmbed()
                .setTitle('__**Bot Status**__')
                .setThumbnail('https://cdn.discordapp.com/avatars/499283712999948298/27c17488e142fef1cce9438a872e8618.png')
                .setColor(color_main)
                .addField('Status:', '✅ I am online! Nice to meet you!')
                .addField('More information:', 'For more detailed information, see https://stats.uptimerobot.com/jvlQLhnmwp')
            message.channel.send(embed)
                .then(message => {
                    message.delete(5000)
                })
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}