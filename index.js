const {
    Client,
    Collection
} = require("discord.js");
const {
    config
} = require("dotenv");
const fs = require("fs");
const Discord = require("discord.js");
const bot = new Discord.Client();
const config_json = require("./config.json");
const Enmap = require("enmap");

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();

client.categories = fs.readdirSync("./commands/");

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

config({
    path: __dirname + "/.env"
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

const statuses = ['I\'m now online 24/7!', 'Am oh Holy Thor Lord of da Shotgun', 'https://discord.gg/byBFT3s'];

client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    setInterval(function () {
        let status = statuses[Math.floor(Math.random()*statuses.length)];
            client.user.setPresence({ 
                game: { 
                    name: status 
                }, 
                status: 'online'});
        }, 10000)
    });

client.on("message", async message => {
    const prefix = config_json.prefix;

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if (cmd.length === 0) return;

    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command)
        command.run(client, message, args);
});

client.on('message', async message => {
    if (message.author.bot) return;

    const args = message.content.split(/ +/g);

    if (args[1]) {
        return
    }

    switch (args[0].toLowerCase()) {
        case 'prefix?':
            message.delete();
            message.channel.send('`RBSW [command]`')
                .then(message => message.delete(5000));
            break;
    }
});

client.login(process.env.TOKEN);