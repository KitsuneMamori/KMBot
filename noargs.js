module.exports = {
    missingArgsEmbed: function() {
        const Discord = require('discord.js');

        var color_main = '0xE000FF';
        var color_red = 16711710;
        var color_green = 8781568; 
 
        var missingArgsEmbed = new Discord.RichEmbed() 
            .setColor(color_red)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('Missing Arguments!')
            .setDescription('Usage: RBSW warn [@User] [Reason]')
            .setTimestamp();
        }
}