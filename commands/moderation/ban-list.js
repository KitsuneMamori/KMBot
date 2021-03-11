const {
    RichEmbed
} = require("discord.js");

module.exports = {
    name: "ban-list",
    category: "moderation",
    description: "Displays all banned users",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');
            var color_red = 16711710;

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an Admin to use this command!')
                .setTimestamp();

            message.delete();

            if (!message.member.roles.some(r => ["Senior Admin", "Head Admin", "Overlord", "Waste Of Space"].includes(r.name))) {
                return message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
            }

            if (message.member.roles.some(r => ["Senior Admin", "Head Admin", "Overlord"].includes(r.name))) {
                message.guild.fetchBans()

                    .then(banned => {
                        let list = banned.map(user => user.tag).join('\n');

                        if (list.length >= 1950) list = `${list.slice(0, 1948)}...`;
                        message.channel.send(`**${banned.size} users are banned:**\n${list}`)
                            .then(message => {
                                message.delete(10000)
                            })
                    })
            }
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}