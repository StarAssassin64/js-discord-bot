//Modules
const {Client, Intents} = require("discord.js");
const { token } = require("./setup.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.once("ready", () => {
    console.log("Ready");
});

client.login(token)