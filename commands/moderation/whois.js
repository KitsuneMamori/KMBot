module.exports = {
    name: "whois",
    category: "moderation",
    description: "Displays user information",
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
            
            var missingArgsEmbed = new Discord.RichEmbed()
            .setColor(color_red)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('Missing Arguments!')
            .setDescription('Usage: RBSW whois [@user]')
            .setTimestamp();
            
            if (!message.member.roles.some(r => ["Overlord", "Admins"].includes(r.name))) {
                return message.channel.send(missingPermissionsEmbed)
                .then(message => {
                    message.delete(5000)
                })
        }
        
        if (!args[0]) {
            return message.channel.send(missingArgsEmbed)
            .then(message => {
                message.delete(5000)
            })
        }
        
        if (message.member.roles.some(r => ["Overlord", "Admins"].includes(r.name))) {
            
            const { Client, RichEmbed } = require('discord.js');
            const { stripIndents } = require("common-tags");
            const { getMember, formatDate } = require("../../functions.js");
            
            const member = getMember(message, args.join(" "));
            
            const joined = formatDate(member.joinedAt);
            const roles = member.roles
            .filter(r => r.id !== message.guild.id)
            .map(r => r).join(", ") || 'none';
            
            const created = formatDate(member.user.createdAt);
            
            const embed = new RichEmbed()
            .setThumbnail(member.user.displayAvatarURL)
            .setFooter(member.displayName, member.user.displayAvatarURL)
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
            
            .addField('Member information:', stripIndents `**> Display name:** ${member.displayName}
            **> Joined at:** ${joined}
            **> Roles:** ${roles}`, true)
            
            .addField('User information:', stripIndents `**> ID:** ${member.user.id}
            **> Username:** ${member.user.username}
            **> Tag:** ${member.user.tag}
            **> Created at:** ${created}`, true)
            
                .setTimestamp()
                
                if (member.user.presence.game) {
                    embed.addField('Currently playing', stripIndents `**> Name:** ${member.user.presence.game.name}`);
                } else
                
                message.channel.send(embed)
                .then(message => {
                    message.delete(30000)
                })
            }
            message.delete();

        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}