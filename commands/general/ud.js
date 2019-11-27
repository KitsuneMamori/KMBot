module.exports = {
    name: "ud",
    category: "general",
    description: "displays the urban dictionary",
    run: async (client, message, args) => {
        try {
            const ud = require('urban-dictionary')
            const Discord = require('discord.js');

            var color_orange = 16752384;

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: `RBSW ud [definition]`')
                .setTimestamp();

            var definition = args[0];

            if (!definition) {
                message.channel.send(missingArgsEmbed)
                return
            }

            // Callback example.
            ud.term(definition, (error, entries, tags, sounds) => {
                if (error) {
                    console.error(error.message)
                } else {

                }
            })

            // Promise example.
            const querystring = require('querystring');
            const fetch = require('node-fetch');

            const query = querystring.stringify({
                term: args.join(' ')
            });
            const {
                list
            } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

            const [answer] = list;
            const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

            const embed = new Discord.RichEmbed()
                .setColor('#F25C2D')
                .setTitle(answer.word)
                .setURL(answer.permalink)
                .addField('Definition', trim(answer.definition, 1024))
                .addField('Example', trim(answer.example, 1024))
                .addField('Rating', `${answer.thumbs_up} 👍   /   ${answer.thumbs_down} 👎`);

            message.channel.send(embed);

        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}