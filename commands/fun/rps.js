const {
    RichEmbed
} = require("discord.js");
const {
    promptMessage
} = require("../../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "fun",
    description: "Rock Paper Scissors game. React to one of the emojis to play the Rock Paper Scissors game.",
    usage: "rps",
    run: async (client, message, args) => {
        const {
            getMember
        } = require("../../functions.js");

        const member = getMember(message, args.join(" "));
        const embed = new RichEmbed()
            .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
            .setTitle(message.member.displayName)
            .setThumbnail(message.member.user.displayAvatarURL)
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("Add a reaction to one of these emojis to play the game!")
            .setTimestamp();
        
        message.delete(300)

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);
        m.delete(5000);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                return "You won!";
            } else if (me === clientChosen) {
                return "It's a tie!";
            } else {
                return "You lost!";
            }
        }
    }
}