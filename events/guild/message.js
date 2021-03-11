require('dotenv').config();
const cooldowns = new Map();
const { notDependencies } = require('mathjs');
const profileModel = require("../../models/profileSchema");
module.exports = async (Discord, client, message) => {
  const member = message.guild.roles.cache.find(role => role.name === 'Member');
  (message.member.roles.add(member))
  if(message.author.bot) return;
  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 1000,
        bank: 0,
        warns: 0,
        messages: 0,
        level: 0,
        items: 0,
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }  

  const response = await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        messages: 1,
      },
    }
  );
  const channel = message.guild.channels.cache.find(channel => channel.name === 'level-ups');
  if(profileData.messages === 10) return channel.send(`${message.author} Congrats you reached level **1** and recieved **1000** coins`)
  if(profileData.messages === 10) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 1000,
      },
    }
  );
  if(profileData.messages === 10) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 1,
      },
    }
  );
  if(profileData.messages === 25) channel.send(`${message.author} Congrats you reached level **2** and recieved **1000** coins`)
  if(profileData.messages === 25) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 1000,
      },
    }
  );
  if(profileData.messages === 25) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 2,
      },
    }
  );
  if(profileData.messages === 50) channel.send(`${message.author} Congrats you reached level **3** and recieved **1000** coins`)
  if(profileData.messages === 50) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 1000,
      },
    }
  );
  if(profileData.messages === 50) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 3,
      },
    }
  );
  if(profileData.messages === 80)  channel.send(`${message.author} Congrats you reached level **4** and recieved **1000** coins`)
  if(profileData.messages === 80) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 1000,
      },
    }
  );
  if(profileData.messages === 80) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 4,
      },
    }
  );
  if(profileData.messages === 120)  channel.send(`${message.author} Congrats you reached level **5** and recieved **2500** coins`)
  if(profileData.messages === 120) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 2500,
      },
    }
  );
  if(profileData.messages === 120) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 5,
      },
    }
  );
  if(profileData.messages === 160)  channel.send(`${message.author} Congrats you reached level **6** and recieved **1500** coins`)
  if(profileData.messages === 160) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 1500,
      },
    }
  );
  if(profileData.messages === 160) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 6,
      },
    }
  );
  if(profileData.messages === 200)  channel.send(`${message.author} Congrats you reached level **7** and recieved **1500** coins`)
  if(profileData.messages === 200) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 1500,
      },
    }
  );
  if(profileData.messages === 200) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 7,
      },
    }
  );
  if(profileData.messages === 250)  channel.send(`${message.author} Congrats you reached level **8** and recieved **1500** coins`)
  if(profileData.messages === 250) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 1500,
      },
    }
  );
  if(profileData.messages === 250) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 8,
      },
    }
  );
  if(profileData.messages === 300) channel.send(`${message.author} Congrats you reached level **9** and recieved **1500** coins`)
  if(profileData.messages === 300) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 1500,
      },
    }
  );
  if(profileData.messages === 300) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 9,
      },
    }
  );
  if(profileData.messages === 375) channel.send(`${message.author} Congrats you reached level **10** and recieved **5000** coins`)
  if(profileData.messages === 375) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 375) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 10,
      },
    }
  );
  if(profileData.messages === 450) channel.send(`${message.author} Congrats you reached level **11** and recieved **2000** coins`)
  if(profileData.messages === 450) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 2000,
      },
    }
  );
  if(profileData.messages === 450) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 11,
      },
    }
  );
  if(profileData.messages === 550) channel.send(`${message.author} Congrats you reached level **12** and recieved **2000** coins`)
  if(profileData.messages === 550) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 2000,
      },
    }
  );
  if(profileData.messages === 550) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 12,
      },
    }
  );
  if(profileData.messages === 675) channel.send(`${message.author} Congrats you reached level **13** and recieved **2000** coins`)
  if(profileData.messages === 675) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 2000,
      },
    }
  );
  if(profileData.messages === 675) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 13,
      },
    }
  );
  if(profileData.messages === 750) channel.send(`${message.author} Congrats you reached level **14** and recieved **2000** coins`)
  if(profileData.messages === 750) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 2000,
      },
    }
  );
  if(profileData.messages === 750) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 14,
      },
    }
  );
  if(profileData.messages === 825) channel.send(`${message.author} Congrats you reached level **15** and recieved **5000** coins`)
  if(profileData.messages === 825) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 825) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 15,
      },
    }
  );
  if(profileData.messages === 900) channel.send(`${message.author} Congrats you reached level **16** and recieved **2000** coins`)
  if(profileData.messages === 900) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 2000,
      },
    }
  );
  if(profileData.messages === 900) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 16,
      },
    }
  );
  if(profileData.messages === 1000) channel.send(`${message.author} Congrats you reached level **17** and recieved **10000** coins`)
  if(profileData.messages === 1000) channel.send(`And to not forget... You have sent 1000 messages with Big Chungus`)
  if(profileData.messages === 1000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 10000,
      },
    }
  );
  if(profileData.messages === 1000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 17,
      },
    }
  );
  if(profileData.messages === 1100) channel.send(`${message.author} Congrats you reached level **18** and recieved **2500** coins`)
  if(profileData.messages === 1100) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 2500,
      },
    }
  );
  if(profileData.messages === 1100) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 18,
      },
    }
  );
  if(profileData.messages === 1210) channel.send(`${message.author} Congrats you reached level **19** and recieved **2500** coins`)
  if(profileData.messages === 1210) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 2500,
      },
    }
  );
  if(profileData.messages === 1210) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 19,
      },
    }
  );
  if(profileData.messages === 1325) channel.send(`${message.author} Congrats you reached level **20** and recieved **15000** coins`)
  if(profileData.messages === 1325) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 15000,
      },
    }
  );
  if(profileData.messages === 1325) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 20,
      },
    }
  );
  if(profileData.messages === 1500) channel.send(`${message.author} Congrats you reached level **21** and recieved **3500** coins`)
  if(profileData.messages === 1500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 1500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 21,
      },
    }
  );
  if(profileData.messages === 1600) channel.send(`${message.author} Congrats you reached level **22** and recieved **3500** coins`)
  if(profileData.messages === 1600) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3000,
      },
    }
  );
  if(profileData.messages === 1600) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 22,
      },
    }
  );
  if(profileData.messages === 1750) channel.send(`${message.author} Congrats you reached level **23** and recieved **3500** coins`)
  if(profileData.messages === 1750) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 1750) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 23,
      },
    }
  );
  if(profileData.messages === 1877) channel.send(`${message.author} Almost there level 24....`)
  if(profileData.messages === 1877) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 1877) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 24,
      },
    }
  );
  if(profileData.messages === 2000) channel.send(`${message.author} Congrats you reached 25 here are 20000 coins!`)
  if(profileData.messages === 2000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 20000,
      },
    }
  );
  if(profileData.messages === 2000) channel.send(`And.... to not forget YOU SEND 2000 MESSAGES WITH BIG CHUNGUS!!!!`)
  if(profileData.messages === 2000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 25,
      },
    }
  );
  if(profileData.messages === 2200) channel.send(`${message.author} Congrats you reached level **26** and recieved **3500** coins`)
  if(profileData.messages === 2200) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 2200) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 26,
      },
    }
  );
  if(profileData.messages === 2400) channel.send(`${message.author} Congrats you reached level **27** and recieved **3500** coins`)
  if(profileData.messages === 2400) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 2400) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 27,
      },
    }
  );
  if(profileData.messages === 2600) channel.send(`${message.author} Congrats you reached level **28** and recieved **3500** coins`)
  if(profileData.messages === 2600) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 2600) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 28,
      },
    }
  );
  if(profileData.messages === 2800) channel.send(`${message.author} Congrats you reached level **29** and recieved **3500** coins`)
  if(profileData.messages === 2800) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 2800) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 29,
      },
    }
  );
  if(profileData.messages === 3000) channel.send(`${message.author} Congrats you reached level **30** and recieved **10000** coins`)
  if(profileData.messages === 3000) channel.send(`And.... to not forget YOU SEND 3000 MESSAGES WITH BIG CHUNGUS!!!!`)
  if(profileData.messages === 3000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 10000,
      },
    }
  );
  if(profileData.messages === 3000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 30,
      },
    }
  );
  if(profileData.messages === 3250) channel.send(`${message.author} Congrats you reached level **31** and recieved **3500** coins`)
  if(profileData.messages === 3250) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 3250) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 31,
      },
    }
  );
  if(profileData.messages === 3500) channel.send(`${message.author} Congrats you reached level **32** and recieved **3500** coins`)
  if(profileData.messages === 3500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 3500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 32,
      },
    }
  );
  if(profileData.messages === 3750) channel.send(`${message.author} Congrats you reached level **33** and recieved **3500** coins`)
  if(profileData.messages === 3750) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 3750) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 33,
      },
    }
  );
  if(profileData.messages === 4000) channel.send(`${message.author} Congrats you reached level **34** and recieved **3500** coins`)
  if(profileData.messages === 4000) channel.send(`And to not forget... You send 4000 messages with Big chungus!`)
  if(profileData.messages === 4000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 3500,
      },
    }
  );
  if(profileData.messages === 4000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 34,
      },
    }
  );
  if(profileData.messages === 4250) channel.send(`${message.author} Congrats you reached level **35** and recieved **10000** coins`)
  if(profileData.messages === 4250) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 4250) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 35,
      },
    }
  );
  if(profileData.messages === 4500) channel.send(`${message.author} Congrats you reached level **36** and recieved **5000** coins`)
  if(profileData.messages === 4500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 4500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 36,
      },
    }
  );if(profileData.messages === 4750) channel.send(`${message.author} Congrats you reached level **37** and recieved **5000** coins`)
  if(profileData.messages === 4750) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 4750) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 37,
      },
    }
  );
  if(profileData.messages === 5000) channel.send(`${message.author} Congrats you reached level **38** and recieved **5000** coins`)
  if(profileData.messages === 5000) channel.send(`And to not forget... You send 5000 messages with Big Chungus!`)
  if(profileData.messages === 5000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 5000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 38,
      },
    }
  );if(profileData.messages === 5250) channel.send(`${message.author} Congrats you reached level **39** and recieved **5000** coins`)
  if(profileData.messages === 5250) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 5250) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 39,
      },
    }
  );if(profileData.messages === 5500) channel.send(`${message.author} Congrats you reached level **40** and recieved **5000** coins`)
  if(profileData.messages === 5500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 5500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 40
      },
    }
  );
  if(profileData.messages === 5800) channel.send(`${message.author} Congrats you reached level **41** and recieved **5000** coins`)
  if(profileData.messages === 5800) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 5800) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 41,
      },
    }
  );
  if(profileData.messages === 6000) channel.send(`${message.author} Congrats you reached level **42** and recieved **5000** coins`)
  if(profileData.messages === 6000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 6000) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 42,
      },
    }
  );
  if(profileData.messages === 6300) channel.send(`${message.author} Congrats you reached level **43** and recieved **5000** coins`)
  if(profileData.messages === 6300) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 6300) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 43,
      },
    }
  );
  if(profileData.messages === 6600) channel.send(`${message.author} Congrats you reached level **44** and recieved **5000** coins`)
  if(profileData.messages === 6600) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 6600) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 44,
      },
    }
  );
  if(profileData.messages === 6900) channel.send(`${message.author} Congrats you reached level **45** and recieved **10000** coins`)
  if(profileData.messages === 6900) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 10000,
      },
    }
  );
  if(profileData.messages === 6900) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 45,
      },
    }
  );
  if(profileData.messages === 7200) channel.send(`${message.author} Congrats you reached level **46** and recieved **5000** coins`)
  if(profileData.messages === 7200) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 7200) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 46,
      },
    }
  );
  if(profileData.messages === 7500) channel.send(`${message.author} Congrats you reached level **47** and recieved **5000** coins`)
  if(profileData.messages === 7500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 7500) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 47,
      },
    }
  );
  if(profileData.messages === 7800) channel.send(`${message.author} Congrats you reached level **48** and recieved **5000** coins`)
  if(profileData.messages === 7800) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 7800) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 48,
      },
    }
  );
  if(profileData.messages === 8100) channel.send(`${message.author} Congrats you reached level **49** and recieved **5000** coins`)
  if(profileData.messages === 8100) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 5000,
      },
    }
  );
  if(profileData.messages === 8100) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 49,
      },
    }
  );
  if(profileData.messages === 8400) channel.send(`${message.author} Congrats you reached level **50** and recieved **20000** coins`)
  if(profileData.messages === 8400) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $inc: {
        coins: 20000,
      },
    }
  );
  if(profileData.messages === 8400) await profileModel.findOneAndUpdate(
    {
      userID: message.author.id,
    },
    {
      $set: {
        level: 50,
      },
    }
  );
  
  

  

  
  

    const prefix = process.env.PREFIX;

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || 
                    client.commands.find(a => a.aliases && a.aliases.includes(cmd));


    //If cooldowns map doesn't have a command.name key then create one.
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`);
        }
    }

    //If the author's id is not in time_stamps then add them with the current time.
    time_stamps.set(message.author.id, current_time);
    //Delete the user's id once the cooldown is over.
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try{
        command.execute(message, args, cmd, client, Discord, profileData);
    } catch (err){
        message.reply("There was an error trying to execute this command!");
        console.log(err);
    }

}
