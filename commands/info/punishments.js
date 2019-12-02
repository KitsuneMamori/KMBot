module.exports = {
    name: "full-rules",
    category: "info",
    description: "Displays the server punishments",
    run: async (client, message, args) => {
        try {
            const rm = require('discord.js-reaction-menu');
            const Discord = require('discord.js');
            var color_main = '0xE000FF';

            new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Discord RBSW Punishments**__')
                .setDescription('The RBSW Punishments')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .addField('**1 Warning:**', 'Our moderation team will sometimes DM the individual of their infraction. Members may receive more than 1 warning before escalating to a temporary ban depending on the severity of the infraction.')
                .addField('**2 Temporary Ban:**', 'The second step in our punishment system will result in a temporary ban. The duration is left up to the moderation team\'s discretion.')
                .addField('**3 Permanent Ban:**', 'The final step in our punishment system is a permanent ban. Once confirmed, this will not be revoked.')
                .setFooter('RBSW Punishments'),

            message.delete();
            message.channel.send(embed)
                .then(message => {
                    message.delete(10000)
                })

        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}