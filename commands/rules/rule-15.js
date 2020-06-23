module.exports = {
    name: "rule-15",
    category: "rules",
    description: "Displays the server rules",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');
            var color_main = '0xE000FF';

            const embed = new Discord.RichEmbed()
                .setColor(color_main)
                .setTitle('__**Discord RBSW Rule number 15:**__')
                .setThumbnail('https://media.discordapp.net/attachments/494612992093192212/639017029025660949/MOSHED-2019-10-30-9-23-49.gif')
                .setDescription('Before you speak, THINK… \n\
                T - is it True? \n\
                H - is it Helpful? \n\
                I - is it Inspiring? \n\
                N - is it Necessary? \n\
                K - is it Kind? \n\n\
                Consider these tips:')
                .addField('**Actually think before you speak.**', 'Just take two or three seconds and you will be amazed at how quickly and effectively your mind can organize your thoughts and in turn your words in a fashion that more effectively gets your point across.')
                .addField('**Don\'t say the first thing that comes to your mind.**', 'Screen that word or phrase and ask yourself if there is a better way to say it. Believe it or not, you really can do that in just a few seconds. (Pausing also communicates to your audience that you care enough to think through what you are saying.')
                .addField('**Consider communicating nothing at all.**', 'Sometimes when you are not exactly sure what words you want to use to make your point, say nothing. Hang back. Take a pass. You don’t have to have an opinion on every topic. This is more difficult for public figures who are expected to speak on a variety of topics, but for most business professionals, you can be more selective and strategic in your communication.')
                .addField('**Always remember where you are.**', 'Before you speak, realize that certain language is acceptable among friends and family in social and private situations. However, these same words can be misunderstood and potentially offensive in public. The key is to know the difference.')
                .addField('**Apologize**.', 'Finally, apologize quickly, concisely and honestly for saying something that you know you shouldn’t have said. Own it with no excuses.')
                .setFooter('RBSW Rule number 14')
                
            message.delete();
            message.channel.send(embed)
                .then(message => {
                    message.delete(60000)
                })

        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}
