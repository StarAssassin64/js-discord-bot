//Modules
const {Client, Intents, Interaction} = require("discord.js");
const { token } = require("./setup.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.once("ready", () => {
    console.log("Ready");
});

client.on('interactionCreate', async Interaction => {
    if(!Interaction.isCommand()) return;

    const { commandName } = Interaction;

    if (commandName === "ping") {
        await Interaction.reply("Pong!");
    } else if (commandName === "server") {
        await Interaction.reply("Server Info.");
    } else if (commandName === "user") {
        await Interaction.reply("User Info.");
    };
});

client.login(token);