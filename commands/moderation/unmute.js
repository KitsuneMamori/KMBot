module.exports = {
    name: "unmute",
    category: "moderation",
    description: "Unmutes mentioned user",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');

            var color_orange = 16752384;
            var color_red = 16711710;
            var color_green = 8781568;

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: `RBSW unmute [@user]`')
                .setTimestamp();

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an Admin to use this command!')
                .setTimestamp();

            if (!message.member.roles.some(r => ["Senior Admin", "Head Admin", "Overlord", "Waste Of Space"].includes(r.name))) {
                message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
                return
            }

            if (message.member.roles.some(r => ["Senior Admin", "Head Admin", "Overlord"].includes(r.name))) {
                message.delete();

                if (!args[0]) {
                    message.channel.send(missingArgsEmbed)
                        .then(message => {
                            message.delete(5000)
                        })
                    return
                }

                if (!message.member.permissions.has("MUTE_MEMBERS")) {
                    message.channel.send(missingPermissionsEmbed)
                        .then(message => {
                            message.delete(5000)
                        })
                    return
                }

                var person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                if (!person) return message.reply("Could not find the following member: " + person)

                let mainrole = message.guild.roles.find(role => role.name === "RainBro");
                let role = message.guild.roles.find(role => role.name === "Muted");

                if (!role) return message.reply("No mute roll detected, please make sure it exists")

                person.removeRole(role.id);
                person.addRole(mainrole.id);

                const unmutedMessage = new Discord.RichEmbed()
                    .setColor(color_green)
                    .setAuthor(`User unmuted`)
                    .setDescription(`@${person.user.tag} has now been unmuted!`)

                message.channel.send(unmutedMessage)
                    .then(message => message.delete(5000));

            }
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}