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
                .setTitle('__**Commands**__')
                .setDescription('All commands have the prefix RBSW')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('Help', 'Opens up the help menu')
                .addField('Commands', 'Opens up the menu which you are currently interacting with')
                .addField('Info', 'Displays information about the bot')
                .addField('Invite', 'Sends the server invite link')
                .addField('Ping', 'Returns the latency and API ping')
                .setFooter('RBSW commands page 1/2'),

                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Commands**__')
                .setDescription('All commands have the prefix RBSW')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('Status', 'Displays if the bot is online')
                .addField('Ud', 'Displays the urban dictionary\'s search results')
                .addField('Report', 'Sends a report to the staff')
                .setFooter('RBSW commands page 2/2'),
            ])
        } catch (e) {
            return console.log(`ERROR: ${e.message}`)
        }
        test
    }
}