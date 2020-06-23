module.exports = {
    name: "terms-of-conditions",
    aliases: ["toc"],
    category: "rules",
    description: "Displays the server ToC",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('https://cdn.discordapp.com/attachments/494612992093192212/651016013688864769/Terms_of_Conditions.pdf')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}