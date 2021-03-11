const {
    RichEmbed
} = require("discord.js");
const {
    stripIndents
} = require("common-tags");
const {
    promptMessage
} = require("../../functions.js");

module.exports = {
    name: "kick",
    category: "moderation",
    description: "Kicks mentioned user from the server",
    run: async (client, message, args) => {
        try {
            const logChannel = message.guild.channels.find(c => c.name === "logs") || message.channel;
            message.delete();

            const Discord = require('discord.js');

            var color_red = 16711710;
            var color_orange = 16752384;

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: `RBSW kick [@user] [reason]`')
                .setTimestamp();

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an Admin to use this command!')
                .setTimestamp();

            if (!message.member.roles.some(r => ["Senior Admin", "Head Admin", "Overlord", "Waste Of Space"].includes(r.name))) {
                return message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
            }

            if (!message.member.hasPermission("KICK_MEMBERS"))
                return message.reply("You don't have the required permissions to use this command.")
                    .then(m => m.delete(5000));

            if (!args[0] || !args[1])
                return message.channel.send(missingArgsEmbed)
                    .then(m => m.delete(5000));

            if (!message.guild.me.hasPermission("KICK_MEMBERS")) {
                return message.reply("I do not have permissions to kick members. Please contact a staff member")
                    .then(m => m.delete(5000));
            }

            const toKick = message.mentions.members.first() || message.guild.members.get(args[0]);

            if (!toKick) {
                return message.reply("Couldn't find that member, try again")
                    .then(m => m.delete(5000));
            }

            if (toKick.id === message.author.id) {
                const delay = ms => new Promise(res => setTimeout(res, ms));
                const msg = await message.reply(`You can't kick yourself...`);
                await delay(2500)

                msg.edit(`Baka!`)

                    .then(m => m.delete(1000));
                return
            }

            if (!toKick.kickable) {
                return message.reply("I can't kick that person due to role hierarchy, I suppose.")
                    .then(m => m.delete(5000));
            }

            const embed = new RichEmbed()
                .setColor("#ff0000")
                .setThumbnail(toKick.user.displayAvatarURL)
                .setFooter(message.member.displayName, message.author.displayAvatarURL)
                .setTimestamp()
                .setDescription(stripIndents `**> Kicked member:** ${toKick} (${toKick.id})
                **> Kicked by:** ${message.member} (${message.member.id})
                **> Reason:** ${args.slice(1).join(" ")}`);

            const promptEmbed = new RichEmbed()
                .setColor("GREEN")
                .setAuthor(`This verification becomes invalid after 30s.`)
                .setDescription(`Do you want to kick ${toKick}?`)

            await message.channel.send(promptEmbed).then(async msg => {
                const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

                if (emoji === "✅") {
                    msg.delete();

                    toKick.kick(args.slice(1).join(" "))
                        .catch(err => {
                            if (err) return message.channel.send(`Well.... the kick didn't work out. Here's the error ${err}`)
                        });

                    logChannel.send(embed);
                } else if (emoji === "❌") {
                    msg.delete();

                    message.reply(`Kick canceled.`)
                        .then(m => m.delete(10000));
                }
            });
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}