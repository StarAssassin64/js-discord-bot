//Modules
const fs = require('node:fs');
const path = require('node:path');
const {Client, Intents, Interaction, Collection} = require("discord.js");
const { token } = require("./setup.json");

const client = new Client({ intents: [Intents.FLAGS.GUILDS]});

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	
	client.commands.set(command.data.name, command);
}

client.once("ready", () => {
    console.log("Ready");
});

client.on('interactionCreate', async Interaction => {
	if(!Interaction.isCommand) return;
	
	const command = client.commands.get(Interaction.commandName);
	
	if (!command) return;
	try {
		await command.execute(Interaction);
	} catch (error) {
		console.error(error);
		await Interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true});
	}
});

client.login(token);