module.exports = {
    name: "rules",
    category: "info",
    description: "Displays the server rules",
    run: async (client, message, args) => {
        try {
            const rm = require('discord.js-reaction-menu');
            const Discord = require('discord.js');
            var color_main = '0xE000FF';

            message.delete();

            new rm.menu(message.channel, message.author.id, [
                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Discord Rules**__')
                .setDescription('The RBSW rules')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('**Rule number 1:**', 'Please use the name that resembles your in-game name and avoid using nsfw avatars.')
                .addField('**Rule number 2:**', 'You are expected to treat your fellow mates with respect at all times, remembering that we are working towards a common goal. aka.Treat others as you would yourself like to be treated.')
                .addField('**Rule number 3:**', 'Avoid mic spam while in voice channel and keep the music usage (joining a call with hard music in the background) in the AFK channel.')
                .setFooter('RBSW rules page 1/4'),

                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Discord Rules**__')
                .setDescription('The RBSW rules')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('**Rule number 4:**', 'As in game no excessive swearing. Repeated swearing is not necessary to get your point across. Though we have freedom of speech we wish that politics, religion and other possibly touchy subjects are left out. You are not allowed to flame/insult other people in the server.')
                .addField('**Rule number 5:**', 'Arguments between members should be discussed in private and not publicly. Officers are here to help resolve the situation if needed.')
                .addField('**Rule number 6:**', 'Keep NSFW in #nsfw channel, some people may be scrolling discord while at work.')
                .setFooter('RBSW rules page 2/4'),

                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Discord Rules**__')
                .setDescription('The RBSW rules')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('**Rule number 7:**', 'Remember after all of this we are here to enjoy ourselves and that is by having fun mixed with serious play.')
                .addField('**Rule number 8:**', 'You are only allowed to join personal channels with the permission of the owner of that channel.')
                .addField('**Rule number 9:**', 'As an admin, you are not allowed to give yourself ranks unless the person who owns the rank gives you permission to do so.')
                .setFooter('RBSW rules page 3/4'),

                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Discord Rules**__')
                .setDescription('The RBSW rules')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('**Rule number 10:**', 'Rude language will automatically be filtered in the #general chat, because this is not allowed. If you wish to say things in a rude way, go to the #nsfw as there are no rules bound to it!')
                .addField('**Rule number 11:**', 'This is an English speaking server, so the only accepted language in chats is English. Excluding specific rooms like "French" / "Dutch". To enter a hidden channel like these write `!rank [language]`.')
                .addField('**Rule number 12:**', 'Do not "shove dirt on somebody else". This will result in an *instant* ban.')
                .addField('**Rule number 13:**', 'Don\'t be a Help Vampire. Use `RBSW helpvampire` for more info')
                .setFooter('RBSW rules page 4/4'),
            ]);
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}