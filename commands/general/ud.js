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
            ud.term(definition)
                .then((result) => {
                    const entries = result.entries
                    message.channel.send(`**Word:** ${entries[0].word}`)
                    message.channel.send(`**Definition:** ${entries[0].definition}`)
                    message.channel.send(`**Example:** ${entries[0].example}`)
                }).catch((error) => {
                    console.error(error.message)
                })
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}