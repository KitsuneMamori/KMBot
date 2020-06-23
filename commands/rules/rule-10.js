module.exports = {
    name: "rule-10",
    category: "rules",
    description: "Displays the server rules",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');
            var color_main = '0xE000FF';

            const embed = new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Discord RBSW Rule number 10:**__')
                .setDescription('This is an English speaking server, so the only accepted language in chats is English. Excluding specific rooms like "French" / "Dutch".')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .setFooter('RBSW Rule number 10')

            message.delete();
            message.channel.send(embed)
                .then(message => {
                    message.delete(15000)
                })

        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}
