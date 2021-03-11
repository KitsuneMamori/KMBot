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
    name: "ban",
    category: "moderation",
    description: "bans the member",
    run: async (client, message, args) => {
        try {
            const logChannel = message.guild.channels.find(channel => channel.name === "logs") || message.channel;
            const Discord = require('discord.js');
            var color_red = 16711710;
            var color_orange = 16752384;

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: `RBSW ban [@user] [reason]`')
                .setTimestamp();

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an Admin to use this command!')
                .setTimestamp();

            if (!message.member.roles.some(r => ["Senior Admin", "Head Admin", "Overlord"].includes(r.name))) {
                return message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
            }

            if (!message.member.hasPermission("BAN_MEMBERS"))
                return message.reply("You don't have the required permissions to use this command.")
                    .then(m => m.delete(5000));

            if (message.member.roles.some(r => ["Senior Admin", "Head Admin", "Overlord"].includes(r.name))) {
                if (message.deletable) message.delete();
            }

            // No args
            if (!args[0]) {
                return message.channel.send(missingArgsEmbed)
                    .then(m => m.delete(7000));
            }

            // No reason
            if (!args[1]) {
                return message.channel.send(missingArgsEmbed)
                    .then(m => m.delete(7000));
            }

            // No bot permissions
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
                return message.reply("❌ I do not have permissions to ban members. Please contact a staff member")
                    .then(m => m.delete(7000));
            }

            const toBan = message.mentions.members.first() || message.guild.members.get(args[0]);

            // No member found
            if (!toBan) {
                return message.channel.send("Couldn't find that member, try again")
                    .then(m => m.delete(7000));
            }

            // Can't ban urself
            if (toBan.id === message.author.id) {
                return message.reply("You can't ban yourself...")
                    .then(m => m.delete(7000));
            }

            // Check if the user's banable
            if (!toBan.bannable) {
                return message.channel.send("I can't ban that person due to role hierarchy, I suppose.")
                    .then(m => m.delete(7000));
            }

            const embed = new RichEmbed()
                .setColor("#ff0000")
                .setThumbnail(toBan.user.displayAvatarURL)
                .setFooter(message.member.displayName, message.author.displayAvatarURL)
                .setTimestamp()
                .setDescription(stripIndents `**> banned member:** ${toBan} (${toBan.id})
            **> banned by:** ${message.member} (${message.member.id})
            **> Reason:** ${args.slice(1).join(" ")}`);

            const promptEmbed = new RichEmbed()
                .setColor("GREEN")
                .setAuthor(`This verification becomes invalid after 30s.`)
                .setDescription(`Do you want to ban ${toBan}?`)

            // Send the message
            await message.channel.send(promptEmbed).then(async msg => {
                // Await the reactions and the reactioncollector
                const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

                // Verification stuffs
                if (emoji === "✅") {
                    msg.delete();

                    toBan.ban(args.slice(1).join(" "))
                    message.channel.send(`${toBan} had been banned!`)
                    .then( message => {
                        message.delete(5000)
                    })
                        .catch(err => {
                            if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error ${err}`)
                        });

                    logChannel.send(embed);
                } else if (emoji === "❌") {
                    msg.delete();

                    message.reply(`ban canceled.`)
                        .then(m => m.delete(10000));
                }
            });
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}