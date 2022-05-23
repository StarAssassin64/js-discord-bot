const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
  data : new SlashCommandBuilder()
      .setName('embed-test')
      .setDescription('This is to test the ability to make an embed'),
    async execute(interaction) {
      const embedTest = new MessageEmbed()
        .setColor('#FF0000')
        .setTitle('Embed Test')
        .addField('This is a field name', 'This is a field value', true)
        .setTimestamp();

      await interaction.reply({embeds: [embedTest]});
    },
};
