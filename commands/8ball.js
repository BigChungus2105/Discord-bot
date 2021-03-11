const Discord = require("discord.js");
module.exports = {
    name: "8ball",
    aliases: [],
    permissions: [],
    cooldown: 5,
    description: "beg for coins",
    async execute(message, args, cmd, client, discord, profileData) {
    const results = ["Yes.", "No.", "Maybe."];
    const result = results[Math.floor(Math.random() * results.length)];
    const input = args.join(" ");

    if (!input) {
      const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle("Invalid Syntax")
        .setDescription(
          `\`-8ball [message]\`\n\nIf question contains "who" or "whose", a random member from the guild will be chosen.`
        );

      message.channel.send(embed);
    } else {
      if (message.content.includes("who") || message.content.includes("Who")) {
        if (message.channel.type === "dm") {
          const member = ["You.", "Me."];
          const result = member[Math.floor(Math.random() * member.length)];
          message.channel.send(`${result}`);
        }
        var member = message.guild.members.cache.random();
        const embed = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setThumbnail(member.avatarURL)
          .addField(member.displayName, `<@${member.id}>`)
          .setTimestamp()
        message.channel.send(embed);
      } else {
        message.channel.send(result);
      }
    }
  }
}