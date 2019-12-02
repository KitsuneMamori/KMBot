module.exports = {
    name: "helpadmin",
    category: "moderation",
    description: "Displays the admin help menu",
    run: async (client, message, args) => {
        try {
            message.delete();

            const Discord = require('discord.js');

            var color_main = '0xE000FF';
            var color_red = 16711710;

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an Admin to use this command!')
                .setTimestamp();

            if (!message.member.roles.some(r => ["Admins", "Overlord"].includes(r.name))) {
                message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    }).catch(error);
                return
            }

            if (message.member.roles.some(r => ["Admins", "Overlord"].includes(r.name))) {

                const rm = require('discord.js-reaction-menu');
                const Discord = require('discord.js');
                var color_main = '0xE000FF';

                new rm.menu(message.channel, message.author.id, [

                    new Discord.RichEmbed()
                    .setColor(color_main)
                    .setTitle('__**Admin Help Menu**__')
                    .setDescription('All commands have the prefix RBSW')
                    .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                    .addField('Clear', 'Cleans the chat with a selected number of messages\nUsage: `RBSW clear [amount] (optional:[@user])`')
                    .addField('Whois', 'Shows you information about somebody\nUsage: `RBSW whois [@user]`')
                    .addField('Ban-list', 'Displays all banned users\nUsage: `RBSW ban-list`')
                    .addField('Ban', 'Bans tagged member\nUsage: `RBSW ban [@user] [reason]`')
                    .addField('Warn', 'Warns the target membern\nUsage: `RBSW warn [@user] [Reason]`')
                    .setFooter('RBSW help menu for admins page 1/3'),

                    new Discord.RichEmbed()
                    .setColor(color_main)
                    .setTitle('__**Admin Help Menu**__')
                    .setDescription('All commands have the prefix RBSW')
                    .addField('Whois', 'Displays user information\nUsage: `RBSW whois [@user]`')
                    .addField('Say', 'Says your input via the bot\nUsage: `RBSW say (optional:[embed]) [message]`')
                    .addField('Spam', 'Says your input x times via the bot\nUsage: `RBSW spam [amount] (optional:[embed]) [message]`')
                    .addField('Kick', 'Kicks mentioned user from the server\nUsage: `RBSW kick [user] [reason]`')
                    .addField('Mute', 'Mutes the person for a selected amount of time \nUsage: `RBSW mute [person] [duration]`')
                    .addField('Shutdown', 'Shutdowns the bot')
                    .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                    .setFooter('RBSW help menu for admins page 2/3'),
                    
                    new Discord.RichEmbed()
                    .setColor(color_main)
                    .setTitle('__**Admin Help Menu**__')
                    .setDescription('All commands have the prefix RBSW')
                    .addField('Shutdown', 'Shutdowns the bot')
                    .addField('Unmute', 'Unmutes the person \nUsage: RBSW unmute [@user]`')
                    .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                    .setFooter('RBSW help menu for admins page 3/3'),
                ])
            }
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}
