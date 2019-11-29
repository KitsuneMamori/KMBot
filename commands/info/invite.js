module.exports = {
    name: "invite",
    category: "info",
    description: "Displays the server invite link",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('https://discord.gg/byBFT3s')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}