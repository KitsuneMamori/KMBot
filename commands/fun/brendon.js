module.exports = {
    name: "brendon",
    category: "fun",
    description: "Brendon fell down the stairs",
    run: async (client, message, args) => {
      const delay = ms => new Promise(res => setTimeout(res, ms));

        const noShutdown = async () => {
            message.channel.send("Oh Brendon...")
                .then(message => {
                    message.delete(3000)
                })
            await delay(2000)
            message.channel.send("Did you fall down the stairs again?...")
                .then(message => {
                    message.delete(3000)
                })
            await delay(2000)
            message.channel.send("https://tenor.com/view/shame-on-you-how-dare-you-smh-tisk-tisk-disappointed-gif-15929394")
                .then(message => {
                    message.delete(3000)
                })
            await message.delete();
        }
        noShutdown();
    }
}