module.exports = {
    name: "format",
    category: "general",
    description: "Sends the format of how to send code",
    run: async (client, message, args) => {
        const Discord = require('discord.js');

        const embed = new Discord.RichEmbed()
            .setColor('BLUE')
            .setTitle('👏 Stick 👏 To 👏 The 👏 Format 👏')
            .setDescription('Is your codeblock length above 10 lines? Put it in a bin link 👏 \n\n\
            Error: https://hatebin.com/ or https://sourceb.in/ \n\
            Code: https://hatebin.com/ or https://sourceb.in/')

        message.delete();
        message.channel.send(embed);
    }
}