console.log('server started');

const {userAccount} = require("sphinx-run");
const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({ checkUpdate: false });
const keep_alive = require("./keep_alive.js");

process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
 process.on("unhandledRejection", error => {
  return;
});

 process.on("unhandledRejection", error => {
  return console.log(error)
});

new userAccount(client, Discord).autoReaction({
channel: "1122492667767554068",
user: "1087310777716854825",
timeout: 1000,
customBotId: ['824119071556763668','294882584201003009','967924435803840512','894633316010066032','1192060869589352458','1177168018711773214','920988047942770698','1201075397182361650','1048591041445498910','1257610790752489495'],
blacklistedwords: ["tokens", "auto"]
})

client.login(process.env.token)

const client2 = new Discord.Client({ checkUpdate: false });
new userAccount(client2, Discord).autoReaction({
channel: "1122492667767554068",
user: "1087310777716854825",
timeout: 1000,
customBotId: ['824119071556763668','294882584201003009','967924435803840512','894633316010066032','1192060869589352458','1177168018711773214','920988047942770698','1201075397182361650','1048591041445498910','1257610790752489495'],
blacklistedwords: ["tokens", "auto"]
})

client2.login(process.env.token2)

const client3 = new Discord.Client({ checkUpdate: false });
new userAccount(client3, Discord).autoReaction({
channel: "1122492667767554068",
user: "1087310777716854825",
timeout: 1000,
customBotId: ['824119071556763668','294882584201003009','967924435803840512','894633316010066032','1192060869589352458','1177168018711773214','920988047942770698','1201075397182361650','1048591041445498910','1257610790752489495'],
blacklistedwords: ["tokens", "auto"]
})

client3.login(process.env.token3)

const client4 = new Discord.Client({ checkUpdate: false });
new userAccount(client4, Discord).autoReaction({
channel: "1122492667767554068",
user: "1087310777716854825",
timeout: 1000,
customBotId: ['824119071556763668','294882584201003009','967924435803840512','894633316010066032','1192060869589352458','1177168018711773214','920988047942770698','1201075397182361650','1048591041445498910','1257610790752489495'],
blacklistedwords: ["tokens", "auto"]
})

client4.login(process.env.token4)

const client5 = new Discord.Client({ checkUpdate: false });
new userAccount(client5, Discord).autoReaction({
channel: "1122492667767554068",
user: "1087310777716854825",
timeout: 1000,
customBotId: ['824119071556763668','294882584201003009','967924435803840512','894633316010066032','1192060869589352458','1177168018711773214','920988047942770698','1201075397182361650','1048591041445498910','1257610790752489495'],
blacklistedwords: ["tokens", "auto"]
})

client5.login(process.env.token5)