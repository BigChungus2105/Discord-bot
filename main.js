const Discord = require('discord.js')
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]})
const prefix = '-';
require('dotenv').config();
const mongoose = require("mongoose")
const AntiSpam = require('discord-anti-spam');
const guildMemberAdd = require('./events/guild/guildMemberAdd');
client.on('message', (message) => antiSpam.message(message));
const antiSpam = new AntiSpam({

    warnThreshold: 5, // Amount of messages sent in a row that will cause a warning.
    muteThreshold: 8, // Amount of messages sent in a row that will cause a mute
    kickThreshold: 10, // Amount of messages sent in a row that will cause a kick.
    banThreshold: 20, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 10000, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '**{@user}**, Please stop spamming.',
    kickMessage: '**{@user}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
    muteMessage: '**{@user}** has been muted for 60 seconds because he/she was spamming.',// Message that will be sent in chat upon muting a user.
    banMessage: '**{@user}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 10, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesmute: 15,
    axDuplicatesKick: 20, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 25, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: (['ADMINISTRATOR']), // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: ['564353701003657216'],
    timeMuted: 1000 * 1,// Array of User IDs that get ignored.
    muteRoleName: "Muted", // Name of the role that will be given to muted users!
    removeMessages: false, // If the bot should remove all the spam messages when taking action on a user!
    kickAble: true,
    banAble: true,
    muteAble: true,
    // And many more options... See the documentation.
});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(process.env.MONGODB_SRV,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(()=>{
    console.log('connected to the database')
}).catch((err) =>{
    console.log.err
})

client.login(process.env.token);
