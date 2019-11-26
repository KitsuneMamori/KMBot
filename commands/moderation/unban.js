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
    name: "unban",
    category: "moderation",
    description: "bans the member",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');
            const bot = new Discord.Client();
            const logChannel = message.guild.channels.find(channel => channel.name === "logs") || message.channel;

            var color_red = 16711710;
            var color_orange = 16752384;

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: `RBSW unban [@user] [reason]`')
                .setTimestamp();

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be the Overlord to use this command!')
                .setTimestamp();

            message.delete();

            if (!message.member.roles.some(r => ["Overlord", "Admins"].includes(r.name))) {
                return message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
            }

            if (!args[0]) {
                return message.channel.send(missingArgsEmbed)
                    .then(m => m.delete(5000));
            }

            if (!message.member.hasPermission("BAN_MEMBERS")) {
                return message.reply("❌ You do not have permissions to unban members. Please contact a staff member.")
                    .then(m => m.delete(5000));
            }

            if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
                return message.reply("❌ I do not have permissions to unban members. Please contact a staff member")
                    .then(m => m.delete(5000));
            }

            message.reply('This function is out of use for now, please unban the user manually or DM the Overlord')
            .then(m => m.delete(5000));

        //     let user = message.mentions.members.first().id;
        //     const toUnBan = user;
        //     let reason = args.slice(1).join(' ');

        //     client.unbanReason = reason;
        //     client.unbanAuth = message.author;

        //     if (reason.length < 1) return message.channel.send(missingArgsEmbed);
        //     if (!user) return message.channel.send(missingArgsEmbed)
        //     .catch(console.error);
        //     message.guild.unban(user);


        //     if (!toUnBan) {
        //         return message.reply("Couldn't find that member, try again")
        //             .then(m => m.delete(5000));
        //     }

        //     if (toUnBan.id === message.author.id) {
        //         return message.reply("You can't unban yourself... Why are you even trying to execute this command? You are not even banned.")
        //             .then(m => m.delete(5000));
        //     }

        //     const embed = new RichEmbed()
        //         .setColor("#ff0000")
        //         .setFooter(message.member.displayName, message.author.displayAvatarURL)
        //         .setTimestamp()
        //         .setDescription(stripIndents `**> unbanned member:** ${toUnBan} (${toUnBan.id})
        //         **> unbanned by:** ${message.member} (${message.member.id})`);

        //     const promptEmbed = new RichEmbed()
        //         .setColor("GREEN")
        //         .setAuthor(`This verification becomes invalid after 30s.`)
        //         .setDescription(`Do you want to unban ${toUnBan}?`)

        //     await message.channel.send(promptEmbed).then(async msg => {
        //         const emoji = await promptMessage(msg, message.author, 30, ["✅", "❌"]);

        //         if (emoji === "✅") {
        //             msg.delete();

        //             message.guild.unban(user)
        //                 .catch(err => {
        //                     if (err) return message.channel.send(`Well.... the ban didn't work out. Here's the error ${err}`)
        //                 });

        //             logChannel.send(embed);
        //         } else if (emoji === "❌") {
        //             msg.delete();

        //             message.reply(`unban canceled.`)
        //                 .then(m => m.delete(5000));
        //         }
        //     });
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}