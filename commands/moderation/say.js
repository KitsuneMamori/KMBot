const {
    RichEmbed
} = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    description: "Says your input via the bot",
    usage: "<input>",
    run: (client, message, args) => {
        try {
            message.delete();

            const Discord = require('discord.js');

            var color_red = 16711710;
            var color_orange = 16752384;

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: `RBSW say [message]`')
                .setTimestamp();

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an Admin to use this command!')
                .setTimestamp();

            if (!message.member.roles.some(r => ["Waste Of Space", "Overlord"].includes(r.name))) {
                return message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
            }

            if (!message.member.hasPermission("MANAGE_MESSAGES"))
                return message.reply("You don't have the required permissions to use this command.")
                    .then(m => m.delete(5000));

            if (!args[0])
                return message.channel.send(missingArgsEmbed)
                    .then(m => m.delete(5000));

            const {
                getMember
            } = require("../../functions.js");

            const member = getMember(message, args.join(" "));

            if (args[0].toLowerCase() === "embed") {
                const embed = new RichEmbed()
                    .setDescription(args.slice(1).join(" "))
                    .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

                message.channel.send(embed);
            } else {
                message.channel.send(args.join(" "));
            }
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}