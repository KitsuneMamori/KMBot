module.exports = {
    name: "commands",
    category: "info",
    description: "Displays all the commands for non-admins",
    run: async (client, message, args) => {
        try {
            message.delete();

            const rm = require('discord.js-reaction-menu');
            const Discord = require('discord.js');
            var color_main = '0xE000FF';

            new rm.menu(message.channel, message.author.id, [
                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Info Commands**__')
                .setDescription('All commands have the prefix RBSW')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('Commands', 'Opens up the menu which you are currently interacting with')
                .addField('Help', 'Opens up the help menu')
                .addField('Info', 'Displays information about the bot')
                .addField('Invite', 'Sends the server invite link')
                .addField('Punishments', 'Displays the server punishments')
                .addField('Ping', 'Returns the latency and API ping')
                .addField('WatchTogether', 'Displays the server watchtogether link')
                .setFooter('RBSW commands page 1/4'),

                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**General Commands**__')
                .setDescription('All commands have the prefix RBSW')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('Ud', 'Displays the urban dictionary\'s search results')
                .addField('Status', 'Displays if the bot is online')
                .addField('Report', 'Sends a report to the staff')
                .addField('Userid', 'Displays user id')
                .addField('Hastebin', 'Sends code to hastebin')
                .addField('HelpVampire', 'Opens a website')
                .setFooter('RBSW commands page 2/4'),
                
                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Rules Commands**__')
                .setDescription('All commands have the prefix RBSW')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('Rules', 'Displays the server rules')
                .addField('Rule-[number]', 'Displays a specific server rule')
                .addField('Terms-of-Conditions', 'Displays the server ToC')
                .setFooter('RBSW commands page 3/4'),

                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Fun Commands**__')
                .setDescription('All commands have the prefix RBSW')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('Love', 'Calculates the love affinity you have for another person.')
                .addField('Rps', 'Rock Paper Scissors game. React to one of the emojis to play the Rock Paper Scissors game.')
                .addField('Meme', 'Sends an epic meme.')
                .setFooter('RBSW commands page 4/4'),
            ])
        } catch (e) {
            return console.log(`ERROR: ${e.message}`)
        }
    }
}