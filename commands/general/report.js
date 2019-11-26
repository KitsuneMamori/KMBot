module.exports = {
    name: "report",
    category: "general",
    description: "Sends a report to the staff",
    run: async (client, message, args) => {
        try {
            const {stripIndents} = require('common-tags');
            const Discord = require('discord.js');
            var color_main = '0xE000FF';
            
            message.delete();
            
            var color_orange = 16752384;
            var color_red = 16711710;
            
            var missingArgsEmbed = new Discord.RichEmbed() 
            .setColor(color_orange)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('Missing Arguments!')
            .setDescription('Usage: `RBSW report [@user] [reason]`')
            .setTimestamp();
            
            let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);
            
            if(!rMember)
            return message.reply('Could not find member')
            .then (message => message.delete(5000));
            
            // Disabled as admins should be able to be reported for abusing their power (for now)
            //
            // if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            //     return message.reply('You can not report that member')
            //     .then (message => message.delete(5000));
            
            if(!args[0])
            return message.channel.send(missingArgsEmbed)
            .then (message => message.delete(5000));
            
        if(!args[1])
        return message.channel.send(missingArgsEmbed)
        .then (message => message.delete(5000));
        
        const channel = message.guild.channels.find(channel => channel.name === "reports")
        
        if(!channel)
        return message.channel.send('I could not find a `reports` channel')
        .then (message => message.delete(5000));
        
        if(args[0] && args[1]){
            message.reply('Done!')
            .then(message => {
                message.delete(1500)
            })
        }
        
        const embed = new Discord.RichEmbed()
        .setColor(color_red)
        .setTimestamp()
        .setTitle('__**Report**__')
        .setDescription(stripIndents`**> Member:** ${rMember} (${rMember.id})
        **> Reported by:** ${message.member} (${message.member.id})
        **> Reported in: ** ${message.channel}
        **> Reason:** ${args.slice(1).join(" ")}`)
        .setThumbnail('https://cdn.discordapp.com/attachments/494612992093192212/644198273992884234/Exclamation-mark-in-red-triangle-warning-sign.png')
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor('Reported member', rMember.user.displayAvatarURL);

            return channel.send(embed);


        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}
