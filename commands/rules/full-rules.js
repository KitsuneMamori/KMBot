module.exports = {
    name: "full-rules",
    category: "rules",
    description: "Displays the server rules",
    run: async (client, message, args) => {
        try {
            const rm = require('discord.js-reaction-menu');
            const Discord = require('discord.js');
            var color_main = '0xE000FF';
            message.delete();

            if (!message.member.roles.some(r => ["Admins", "Overlord"].includes(r.name))) {
                return message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
            }

            if (message.member.roles.some(r => ["Admins", "Overlord"].includes(r.name))) {
                const embed = new Discord.RichEmbed()
                    .setColor(color_main)
                    .setTitle('__**Discord Rules**__')
                    .setDescription('The RBSW rules')
                    .addField('**Rule number 1:**', 'Please use the name that resembles your in-game name and avoid using nsfw avatars or statuses.')
                    .addField('**Rule number 2:**', 'You are expected to treat your fellow mates with respect at all times, remembering that we are working towards a common goal. aka.Treat others as you would yourself like to be treated.')
                    .addField('**Rule number 3:**', 'Avoid mic spam while in voice channel and keep the music usage (joining a call with hard music in the background) in the AFK channel.')
                    .addField('**Rule number 4:**', 'As in game no excessive swearing. Repeated swearing is not necessary to get your point across. Though we have freedom of speech we wish that politics, religion and other possibly touchy subjects are left out. You are not allowed to flame/insult other people in the server.')
                    .addField('**Rule number 5:**', 'Arguments between members should be discussed in private and not publicly. Officers are here to help resolve the situation if needed.')
                    .addField('**Rule number 6:**', 'Keep NSFW in #nsfw channel, some people may be scrolling discord while at work.')
                    .addField('**Rule number 7:**', 'You are only allowed to join personal channels with the permission of the owner of that channel.')
                    .addField('**Rule number 8:**', 'As an admin, you are not allowed to give yourself ranks unless the person who owns the rank gives you permission to do so.')
                    .addField('**Rule number 9:**', 'Rude language will automatically be filtered in the #general chat, because this is not allowed. If you wish to say things in a rude way, go to the #nsfw as there are no rules bound to it!')
                    .addField('**Rule number 10:**', 'This is an English speaking server, so the only accepted language in chats is English. Excluding specific rooms like "French" / "Dutch".')
                    .addField('**Rule number 11:**', 'Do not libel somebody else then yourself. This will result in an *instant* ban.')
                    .addField('**Rule number 12:**', 'Do not be a Help Vampire (A person who requests answers and solutions from a community while giving nothing in return)RB. Use `RBSW helpvampire` for more info.')
                    .addField('**Rule number 13:**', 'Do not message admins about stuff related to rules/bans/etc. If you have something to say, message the Overlord.')
                    .addField('**Rule number 14:**', 'Some smart boys/girls under us know how to exploit punishments given to them. This is strictly forbidden and will result in a punishment of a higher degree.')
                    .addField('**Rule number 15:**', 'Before you speak, THINK… \n\
                    T - is it True? \n\
                    H - is it Helpful? \n\
                    I - is it Inspiring? \n\
                    N - is it Necessary? \n\
                    K - is it Kind?')
                    .setFooter('Discord Rules')

                message.channel.send(embed)
            }
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}