module.exports = {
    name: "userid",
    category: "moderation",
    description: "Displays user id",
    run: async (client, message, args) => {
        const Discord = require('discord.js');

        var color_red = 16711710;

        var missingArgsEmbed = new Discord.RichEmbed()
            .setColor(color_red)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('Missing Arguments!')
            .setDescription('Usage: RBSW userid [@user]')
            .setTimestamp();

        if (!args[0]) {
            return message.channel.send(missingArgsEmbed)
                .then(message => {
                    message.delete(5000)
                })
        }

        const {
            Client,
            RichEmbed
        } = require('discord.js');
        const {
            stripIndents
        } = require("common-tags");
        const {
            getMember,
            formatDate
        } = require("../../functions.js");

        const member = getMember(message, args.join(" "));

        const joined = formatDate(member.joinedAt);
        const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';

        const embed = new RichEmbed()
            .setThumbnail(member.user.displayAvatarURL)
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)

            .addField('User information:', stripIndents `**> ID:** ${member.user.id}
            **> Username:** ${member.user.username}
            **> Tag:** ${member.user.tag}`, true)

            .setTimestamp()

            message.channel.send(embed)
            .then(message => {
                message.delete(30000)
            })
            message.delete();
    }
} 