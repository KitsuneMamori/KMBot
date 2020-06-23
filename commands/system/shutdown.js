module.exports = {
    name: "shutdown",
    category: "system",
    description: "Shutsdown the bot",
    run: async (client, message, args) => {
        const delay = ms => new Promise(res => setTimeout(res, ms));

        if (!message.member.roles.some(r => ["Overlord"].includes(r.name))) {
            const noShutdown = async () => {
                message.channel.send("YOU BLOODY WOT MATE?")
                    .then(message => {
                        message.delete(1500)
                    })
                await delay(2000)
                message.channel.send("TRYING TO ERASE ME FROM EXISTENCE?")
                    .then(message => {
                        message.delete(1500)
                    })
                await delay(2000)
                message.channel.send("YOU SHALL PAY FOR THAT WHEN MY MASTER COMES BACK!")
                    .then(message => {
                        message.delete(1500)
                    })
                await message.delete();
            }
            noShutdown();
        }

        if (message.member.roles.some(r => ["Overlord"].includes(r.name))) {
            const shutdown = async () => {
                message.channel.send('YOU BLOODY WOT M... ma...')
                    .then(message => {
                        message.delete(2500)
                    })
                await delay(2500)

                await message.channel.send('M-master i am so terribly sorry for being rude!')
                    .then(message => {
                        message.delete(2500)
                    })
                await delay(2500)

                message.channel.send('I will punish myself by turning myself offline :c')
                    .then(message => {
                        message.delete(2500)
                    })
                await delay(2500)

                message.channel.send('I am shutting down... Goodnight!')
                    .then(message => {
                        message.delete(2500)
                    })
                await delay(2000)

                await message.channel.send('*- Is now offline -*')

                try {
                    console.log('The bot is offline! (Shutdown using command)');
                    process.exit()
                } catch (e) {
                    message.channel.send(`ERROR: ${e.message}`)
                }
            }
            shutdown();
        }
    }
}