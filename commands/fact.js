const client = require('nekos.life');
const {Discord, MessageEmbed} = require('discord.js');
const { execute } = require('./rob');
const neko = new client();


module.exports = {
    name: "fact",
    category: "fun",
  description: "sends a cool fact",
  usage: "[command]",
  async execute(message, args, client){
  //command

    async function work() {

        let owo = (await neko.sfw.fact());
        const botp1Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription(owo.fact)
        message.channel.send(botp1Embed).catch(error => {
            console.error(error);
        });
      }

      work();
  }
  };