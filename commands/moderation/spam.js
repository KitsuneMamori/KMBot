const {
    RichEmbed
} = require("discord.js");

module.exports = {
    name: "spam",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    description: "Says your input x times via the bot",
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
                .setDescription('Usage: `RBSW spam [times] (optional:[embed]) [message]`')
                .setTimestamp();

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be the Overlord to use this command!')
                .setTimestamp();

            if (!message.member.roles.some(r => ["Overlord", "Waste Of Space"].includes(r.name))) {
                return message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
            }

            if (!args[0])
                return message.channel.send(missingArgsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })

            const roleColor = message.guild.me.highestRole.hexColor;

            function repeat(func, times) {
                func();
                times && --times && repeat(func, times);
            }

            const repeatAmount = args[0];

            if (isNaN(repeatAmount)) {
                message.channel.send(missingArgsEmbed);
                return
            }

            if (args[1].toLowerCase() === "embed") {
                const embed = new RichEmbed()
                    .setDescription(args.slice(2).join(" "))
                    .setColor(roleColor === "#000000" ? "#E000FF" : roleColorv);

                repeat(function () {
                    message.channel.send(embed);
                }, repeatAmount);

            } else {
                repeat(function () {
                    message.channel.send(args.slice(1).join(" "));
                }, repeatAmount);
            }
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}