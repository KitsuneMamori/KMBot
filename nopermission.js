module.exports = {
    missingPermissionsEmbed: function() {
 
    var missingPermissionsEmbed = new Discord.RichEmbed() 
            .setColor(color_red)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('Insufficient Permissions!')
            .setDescription('You need to be an ADMIN to use this command!')
            .setTimestamp();
    }
}