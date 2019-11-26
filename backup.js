const {Client, RichEmbed } = require("discord.js");
const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
const config = require("./config.json");
client.config = config;
const prefix = config.prefix;
const Enmap = require("enmap");
const fs = require("fs");
client.config = config;
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Terminal response message //
bot.on('ready', () => {
    console.log('The bot is online!');
})

bot.on('message', message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/g);

    switch (args[0].toLowerCase()) {
        // use ping to test if the bot is online//
        case 'ping':
            bot.commands.get('ping').execute(message, args);
        break;

        case 'prefix':
            message.channel.send(`${prefix}`);
        break;

        case 'help':
            bot.commands.get('help').execute(message, args);
        break;

        case 'info':
            bot.commands.get('info').execute(message, args);
        break;

        case 'rules':
            bot.commands.get('rules').execute(message, args);
        break;

        case 'commands':
            bot.commands.get('commands').execute(message, args);
        break;

        case 'report':
            bot.commands.get('report').execute(message, args);
        break;

        case 'invite':
            bot.commands.get('invite').execute(message, args);
        break;
        case 'link':
            bot.commands.get('invite').execute(message, args);
        break;

        case 'league':
            bot.commands.get('league').execute(message, args);
        break;

        case 'status':
            bot.commands.get('status').execute(message, args);
        break;
        case 'test':
            bot.commands.get('status').execute(message, args);
        break;

        case 'ud':
            bot.commands.get('urban-dictionary').execute(message, args);
        break;
        case 'urban-dictionary':
            bot.commands.get('urban-dictionary').execute(message, args);
        break;
        case 'urbandictionary':
            bot.commands.get('urban-dictionary').execute(message, args);
        break;

            // admin commands //
        case 'clear':
            bot.commands.get('clear').execute(message, args);
        break;

        case 'clean':
            bot.commands.get('clear').execute(message, args);
        break;
        case 'purge':
            bot.commands.get('clear').execute(message, args);
        break;

        case 'mute':
            bot.commands.get('mute').execute(message, args);
        break;

        case 'unmute':
            bot.commands.get('unmute').execute(message, args);
        break;

        case 'whois':
            bot.commands.get('whois').execute(message, args);
        break;

        case 'helpadmin':
            bot.commands.get('helpadmin').execute(message, args);
        break;

        case 'adminhelp':
            bot.commands.get('helpadmin').execute(message, args);
        break;

        case 'ban':
            bot.commands.get('ban').execute(message, args);
        break;

        case 'unban':
            bot.commands.get('unban').execute(message, args);
        break;

        case 'banlist':
            bot.commands.get('banlist').execute(message, args);
        break;

        case 'whyban':
            bot.commands.get('whyban').execute(message, args);
        break

        case 'kick':
            bot.commands.get('kick').execute(message, args);
        break;

        case 'shutdown':
            bot.commands.get('shutdown').execute(message, args);
        break;

        case 'reload':
            bot.commands.get('reload').execute(message, args);
        break;

    }
})

bot.login(config.token);