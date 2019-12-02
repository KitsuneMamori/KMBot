module.exports = {
    name: "watchtogether",
    category: "info",
    description: "Displays the server watchtogether link",
    run: async (client, message, args) => {
        try {
            message.delete();
            message.channel.send('https://www.watch2gether.com/rooms/rainbowswaggers-svq1kzkcw03ij2zm75?lang=en')
        } catch (e) {
            console.log(`ERROR: ${e.message}`)
        }
    }
}