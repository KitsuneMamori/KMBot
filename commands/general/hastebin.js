module.exports = {
    name: "hastebin",
    category: "general",
    description: "Sends code to hastebin",
    run: async (client, message, args) => {
        const hastebin = require('hastebin-gen');

        //let haste = args.slice(0).join(" ")

        let type = args.slice(1).join(" ")

        if (!args[1]) {
            return message.channel.send("What do you want to post in Hastebin?")
        }
        const haste = await hastebin(args.slice(0).join(" "));

        hastebin(haste).then(r => {
            message.channel.send("`Posted to Hastebin at this URL:`  " + r);
        }).catch(console.error);
        message.delete(100);
    }
}
