module.exports = {
    name: "help",
    category: "info",
    description: "Displays the help menu",
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
                .setDescription('Type `RBSW rules` to see the full list of rules')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('**1.** Name and avatar', 'Use the name that resembles your in-game name and avoid using nsfw avatars.')
                .addField('**2.** Respect', 'Treat your fellow mates with respect.')
                .addField('**3.** Mic spam', 'Avoid mic spam while in voice channe.')
                .addField('**4.** Excessive swearing', 'No excessive swearing. Repeated swearing isn\'t necessary to get your point across.')
                .addField('**5.** Arguments', 'Arguments between members must be discussed in private and not in public.')
                .addField('**6.** NSFW', 'Keep NSFW in #nsfw channel, as some people may be scrolling discord while at work.')
                .addField('**7.** No rude language', 'No rude language, this will automatically be filtered in the #general chat')
                .setFooter('RBSW help menu page 1'),

                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Commands**__')
                .setDescription('Type `RBSW commands` to see the full list of rules \nAll commands have the prefix RBSW')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('Help', 'This will open up the menu which you are currently interacting with')
                .addField('Info', 'This will open information about the bot')
                .addField('Commands', 'Opens up the menu which you are currently interacting with')
                .setFooter('RBSW help menu page 2'),

                new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Administrators**__')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .setDescription('The following people are administrators on this server, contact them if you need any help, support or if you have an issue according this server.')
                .addField('Owner', '-K. Mamori#6666')
                .addField('Head Admin', '- ItsTechys#2515 / Drondin')
                .addField('Senior Admins', 'Eranoid#2937 / Morwyn')
                .addField('Junior Admins', '- Hoopcha#6894 \n- Tuckky#6518 \n- kennyiscool159#5928')
                .setFooter('RBSW help menu page 3'),

                // new Discord.RichEmbed()
                // .setTitle('__**Test**__')
                // .setDescription("Occaecat deserunt ea nulla dolor ad ex nulla nostrud ex."),
            ]);
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
        
        message.react('👍').then(() => message.react('👎'));

            const collector = this.msg.createReactionCollector((r, u) => u.id == uid, {time: this.time});
            this.collector = collector;
            collector.on('collect', r => {
                if(r.emoji.name == this.reactions.stop) {
                    then(msg => {
                        msg.delete(2500)
                    })
                }
            }
    }
}