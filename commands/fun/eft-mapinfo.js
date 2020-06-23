module.exports = {
    name: "eft-mapinfo",
    aliases: ["eft-maps"],
    category: "fun",
    description: "Displays the escape from tarkov map info",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');
            var color_main = '0xE000FF';

            const embed = new Discord.RichEmbed()
                .setTitle('__**Escape from Tarkov**__')
                .setDescription('Type `RBSW eft-mapname` to see the map of that location')
                .setThumbnail('https://cdn.discordapp.com/attachments/494612992093192212/720283024830234734/escape_from_tarkov_PNG12.png')
                .addField('**Customs**', 'https://escapefromtarkov.gamepedia.com/Customs')
                .setColor(color_main)

            message.delete();
            message.channel.send(embed)
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}