module.exports = {
    name: "clear",
    category: "moderation",
    description: "Clears a specific amount of messages from chat",
    run: async (client, message, args) => {
        try {
            const Discord = require('discord.js');

            var color_main = '0xE000FF';
            var color_red = 16711710;
            var color_green = 8781568;
            var color_orange = 16752384;

            var missingArgsEmbed = new Discord.RichEmbed()
                .setColor(color_orange)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Missing Arguments!')
                .setDescription('Usage: `RBSW clear [amount] (optional:[@user])`\n\nThe minimum amount of messages I can delete is 1 and maximum is 99')
                .setTimestamp();

            var missingPermissionsEmbed = new Discord.RichEmbed()
                .setColor(color_red)
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('Insufficient Permissions!')
                .setDescription('You need to be an Admin to use this command!')
                .setTimestamp();
            if (message.member.permissions.has("MANAGE_MESSAGES")) {

                const deleteCount = parseInt(args[0]) + 1;
                const user = message.mentions.users.first();
                const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])

                if (!deleteCount || deleteCount < 2 || deleteCount > 100)
                    return message.channel.send(missingArgsEmbed)
                        .then(message => {
                            message.delete(10000)
                        })

                if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to clean!');
                message.channel.fetchMessages({
                    limit: 100,
                }).then((messages) => {
                    if (user) {
                        const filterBy = user ? user.id : Client.user.id;
                        messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                        message.delete();
                        message.channel.bulkDelete(messages).catch(error => console.log(error.stack))

                    } else {
                        message.channel.bulkDelete(deleteCount).catch(error => console.log(error.stack))
                    }

                    if (args[1]) {
                        message.channel.send('I deleted the last ' + '`' + args[0] + '`' + ' messages from ' + args[1] + ' for you!')
                            .then(message => {
                                message.delete(5000)
                            })
                    } else {
                        message.channel.send('I deleted the last ' + '`' + args[0] + '`' + ' messages for you!')
                            .then(message => {
                                message.delete(5000)
                            })
                    }
                });
            } else {
                message.channel.send(missingPermissionsEmbed)
                    .then(message => {
                        message.delete(5000)
                    })
            }
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}