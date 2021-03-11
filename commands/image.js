const Discord = require('discord.js');

var Scraper = require('images-scraper');
const { execute } = require('./reset');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    desription: 'this sends an image to discord',
    cooldown: 10,
    async execute(message, args, client){
        const image_query = args.slice(0).join(' ');
        if (message.content.includes('when the impostor is sus')) return message.author.send(`https://i.kym-cdn.com/entries/icons/original/000/035/973/cover3.jpg
        you are sus BE SCARED`);
        if (message.content.includes('when the imposter is sus')) return message.author.send(`https://i.kym-cdn.com/entries/icons/original/000/035/973/cover3.jpg
        you are sus BE SCARED`);
        if (message.content.includes('impostor')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('quinten gooi spel')) return message.channel.send('gooi jezelf door het raam heen pls');
        if (message.content.includes('imposter')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('sus')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('s.u.s')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('imp')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('poster')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('s,u,s')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('s,us')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('su,s')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('IMPOSTOR')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('IMPOSTER')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('SUS')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes("s  u s")) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('POSTER')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('IMP')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('S.U.S')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('su,s')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('uinten')) return message.channel.send('DONT talk about him ever again');
        if (message.content.includes('inten')) return message.channel.send('DONT talk about him ever again');
        if (message.content.includes('nten')) return message.channel.send('DONT talk about him ever again');
        if (message.content.includes('quin')) return message.channel.send('DONT talk about him ever again');
        if (message.content.includes('zing song')) return message.channel.send('DONT talk about him ever again');
        if (message.content.includes("q u i n t e n")) return message.channel.send('DONT talk about him ever again');
        if (message.content.includes("i m p o s t o r")) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes("i m p o s t e r")) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes("s u s")) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('hentai')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('cum')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('Cum')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('CUm')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('CUM')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('cUM')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('porn')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('cuM')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('cUm')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('big ice cream')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('c.um')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('cu.m')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('HENTAI')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('c.u.m')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('h.entai')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('moaning')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('moan')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('orgasm')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('p0rn')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('Hentai')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');
        if (message.content.includes('m0aning')) return message.channel.send('DIRTY ASSHOLE NOT IN THIS DISCORD PLS');    
        if (message.content.includes('https://www.youtube.com/watch?v=0bZ0hkiIKt0&ab')) return message.channel.send('you are sus BE SCARED');
        if (message.content.includes('quinten')) return message.channel.send('DONT talk about him ever again');
        if (message.content.includes('among us')) return message.channel.send('among us = cringe');
        if (message.content.includes('earrape')) return message.channel.send('cant year your earrape because its an image idiot');
        if (message.content.includes('ear')) return message.channel.send('cant year your earrape because its an image idiot');
        if (message.content.includes('rape')) return message.channel.send('No rapes aloud');
        if (message.content.includes('qui')) return message.channel.send('DONT talk about him ever again');
        if (message.content.includes('a mong us')) return message.channel.send('a day among us away is a day cringe away');
        if(!image_query) return message.channel.send('please enter an image name');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}