module.exports = {
    name: "warn",
    category: "moderation",
    description: "warns the member",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');

            var color_main = '0xE000FF';
            var color_red = 16711710;
            var color_green = 8781568;
            var color_orange = 16752384;

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an ADMIN to use this command!')
                .setTimestamp();

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: RBSW warn [@User] [Reason]')
                .setTimestamp();

            if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed);
            let mentioned = message.mentions.users.first();

            if (!mentioned) return message.channel.send(missingArgsEmbed);
            let reason = args.slice(1).join(' ');

            if (!reason) return message.channel.send(missingArgsEmbed);

            var warningEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle(`You've been warned in ${message.guild.name}`)
                .addField('Warned by', message.author.tag)
                .addField('Reason', reason)
                .addField('If you do not agree with the warning', 'Message the Overlord in DM with a screenshot of this warning and your reasoning')
                .addField('DO NOT', 'Do not send the Admin who warned you a message about it, this will result in an official warning/ban')
                .setTimestamp();
            mentioned.send(warningEmbed); // DMs the user the above embed!

            const user = message.mentions.members.first() || message.guild.members.get(args[0]);

            var warnSuccessfulEmbed = new Discord.RichEmbed()
                .setColor(color_green)
                .setTitle(`${user} Successfully Warned!`)
                .addField('Reason', reason)
            message.channel.send(warnSuccessfulEmbed);
            message.delete();
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}