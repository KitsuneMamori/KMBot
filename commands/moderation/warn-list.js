const fs = require("fs");
const Discord = require('discord.js');

module.exports = {
    name: "warn-list",
    category: "moderation",
    description: "displays the list of warnings of an user",
    run: async (client, message, args) => {
        try {
            var color_main = '0xE000FF';
            var color_red = 16711710;
            var color_green = 8781568;
            var color_orange = 16752384;

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an ADMIN to use this command!')
                .setTimestamp();

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: RBSW warn-list [@User]')
                .setTimestamp();

            if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed);

            let rawdata = fs.readFileSync('././warnings.json');
            let warnings = JSON.parse(rawdata);
            message.channel.send(warnings);

            

        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}