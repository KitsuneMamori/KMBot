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
                    .addField('Ban-list', 'Displays all banned users\nUsage: `RBSW ban-list`')
                    .addField('Ban', 'Bans tagged member\nUsage: `RBSW ban [@user] [reason]`')
                    .addField('Clear', 'Cleans the chat with a selected number of messages\nUsage: `RBSW clear [amount] (optional:[@user])`')
                    .addField('Kick', 'Kicks mentioned user from the server\nUsage: `RBSW kick [user] [reason]`')
                    .addField('Mute', 'Mutes the person for a selected amount of time \nUsage: `RBSW mute [person] [duration]`')
                    .setFooter('RBSW help menu for admins page 1/3'),
                    
                    new Discord.RichEmbed()
                    .setColor(color_main)
                    .setTitle('__**Admin Help Menu**__')
                    .setDescription('All commands have the prefix RBSW')
                    .addField('Say', 'Says your input via the bot\nUsage: `RBSW say (optional:[embed]) [message]`')
                    .addField('Spam', 'Says your input x times via the bot\nUsage: `RBSW spam [amount] (optional:[embed]) [message]`')
                    .addField('Unmute', 'Unmutes the person \nUsage: RBSW unmute [@user]`')
                    .addField('Userid', 'Gets user ID\nUsage: `RBSW userid [@user]')
                    .addField('Warn', 'Warns the target membern\nUsage: `RBSW warn [@user] [Reason]`')
                    .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                    .setFooter('RBSW help menu for admins page 2/3'),
                    
                    new Discord.RichEmbed()
                    .setColor(color_main)
                    .setTitle('__**Admin Help Menu**__')
                    .setDescription('All commands have the prefix RBSW')
                    .addField('Shutdown', 'Shuts the bot down. Remember that the bot is being hosted online and will directly restart if this command is executed\nUsage: `RBSW shutdown`')
                    .addField('Whois', 'Displays user information\nUsage: `RBSW whois [@user]`')
                    .addField('Status', 'Displays if the bot is online\nUsage: `RBSW status`')
                    .addField('Rule-[number]', 'Displays a specific server rule\nUsage: `RBSW rule-[number]`\n *example: RBSW rule-15*')
                    .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                    .setFooter('RBSW help menu for admins page 3/3'),
                ])
            }
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}
