const {
   Client,
   Intents,
   Discord
} = require('discord.js-selfbot-v13');
const Eris = require("eris");
const login = require("discord-password-login");
const prompt = require("prompt-sync")();
var colors = require('colors');
const config = require('./config.json');
const {
   Webhook,
   MessageBuilder
} = require('discord-webhook-node');
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const readline = require('readline').createInterface({
   input: process.stdin,
   output: process.stdout
});
process.stdout.write('\033c')
process.on('uncaughtException', function(err) {
   
});
var clients = []
const client = new Client({
   checkUpdate: false,
});
const KeyAuth = require('./KeyAuth');
const KeyAuthApp = new KeyAuth("NL", // Application Name
   "4lhXrF1CCQ", // OwnerID
   "2eaddbacbbd06925ef17bae04b3da3396574c4ad5812d7cdd8d30e7cf2904087", // Application Secret
   "1.0" // Application Version
);
var botUserIDs = [];
var lic;
console.log(`
                           ---------------------------------------------------------
                           |-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-| 
                           |-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-| 
                           ||                                                     ||                                                     
                           ||                   Auto Giveaways                    ||    
                           ||             https://discord.gg/jWCYx7UfsQ           ||      
                           ||                                                     ||    
                           |-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-| 
                           |-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-| 
                           ---------------------------------------------------------



   `)

async function e(){
   console.log("[!]".red + " Converting (make sure your IP is registered to the accounts.)")
   const toks = config.token
   var lst = []
   var count = 0
   for (var token of toks) {
      login(token.split(":")[0], token.split(":")[1]).then(token => {
         lst.push(token)
      });

      await delay(10000)
      count++
      console.log('[?]'.rainbow + " Converted : " + count + " tokens...")
      console.log('[@]'.rainbow + " Wating 10 seconds...")

   }

   console.log(lst)
   count = 0;
}
async function f() {
   await readline.question('                                             [@]'.rainbow + ' License => ', async name => {
      //await KeyAuthApp.Initialize();
      //await KeyAuthApp.license(name);


      var hook = new Webhook(config.webhook)
      var hookWin = new Webhook(config.webhookWin)
      const tokens = config.token
      process.stdout.write('\033c')
      for (var token of tokens) {
         const client = new Client({
            checkUpdate: false,
         });
         var cbd = "";
         await console.log("[!]".red + " Logging in...")

         
            cbd = token
            clients.push(client);
            client.on('ready', () => {
               botUserIDs.push(client.user.id)
               console.log("[@]".cyan + " Fetching Giveaways with :" + client.token.slice(0, 25) + "*".repeat(15))
               /*
               client.channels.cache.find(channel => {
                  if (channel.type == "DM") {} else {
                     if (channel.name.includes("giveaway") || channel.name.includes("nitro") || channel.name.includes("no-req") || channel.name.includes("gw") || channel.name.includes("fast") || channel.name.includes("paypal") || channel.name.includes("€") || channel.name.includes("¹") || channel.name.includes("²")) {
                        channel.messages.fetch({
                           limit: 5
                        }).then(messages => {
                           messages.forEach(async message => {
                              if (message.author.id === "294882584201003009") {
                                 if (message.embeds[0] === undefined) {} else if (message.embeds[0].description.includes("Hosted by:") && message.embeds[0].description.includes("Entries:") && !message.embeds[0].description.includes("Ended:")) {
                                    let invite = await message.channel.createInvite()
                                    message.components[0].components[0].click(message)
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by Giveaway Bot)').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                 }
                              } else if (message.author.id === "824119071556763668") {
                                 if (message.content.includes("GIVEAWAY!")) {
                                    let invite = await message.channel.createInvite()
                                    message.react("🎉")
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by Apollo)').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                 }
                              } else if (message.author.id === "530082442967646230") {
                                 if (message.embeds[0] === undefined) {} else if (message.embeds[0].description.includes("React with") && message.embeds[0].description.includes("Winners:") && message.embeds[0].description.includes("Duration:")) {
                                    let invite = await message.channel.createInvite()
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by Giveaway Boat)').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                    message.react("🎉")
                                 }
                              } else if (message.author.id === "318312854816161792") {
                                 if (message.content.includes("GIVEAWAY")) {
                                    message.react("🎉")
                                    let invite = await message.channel.createInvite()
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by DraftBot) ').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                 }
                              } else if (message.author.id === "582537632991543307") {
                                 if (message.content.includes("GIVEAWAY")) {
                                    message.react("🎉")
                                    let invite = await message.channel.createInvite()
                                    var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined (Hosted by Santa Lunar)').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                                    hook.send(embed2);
                                 }
                              }
                           })
                        })
                     } else {}
                  }
               })
               */
               console.log("[@]".blue + " Giveaway Scrapping Finished, waiting for Giveaways...")
            });
            client.on("messageCreate", async message => {
               if (message.content.includes(client.user.id)) {
                  result = true
               } else {
                  result = false
               }
               //result = botUserIDs.every(w => message.content.includes(w))
               try {
                  delay(2000)
                  /* Giveaway Bot */
                  if (message.author.id === "294882584201003009") {
                     if (message.content.includes("Congratulations") && result) {
                        let invite = await message.channel.createInvite()
                        const owner = await message.guild.fetchOwner();
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/" + invite.code).setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin (" + owner.user.username + "#" + owner.user.discriminator + ").\n\n----------------------------------------------------------").addField("Prize", message.content.split("You won the")[1] + "\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                     }
                     if (message.embeds[0] === undefined) {
                        return
                     }
                     if (message.embeds[0].description.includes("Hosted by:") && message.embeds[0].description.includes("Entries:")) {
                        let invite = await message.channel.createInvite()
                        message.components[0].components[0].click(message)
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                     }
                     /* Apollo */
                  } else if (message.author.id === "824119071556763668") {
                     if (message.content.includes("GIVEAWAY!")) {
                        let invite = await message.channel.createInvite()
                        message.react("🎉")
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                     } else if (result && message.content.includes("Congratulations,")) {
                        let invite = await message.channel.createInvite()
                        const owner = await message.guild.fetchOwner();
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/" + invite.code).setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin (" + owner.user.username + "#" + owner.user.discriminator + ").\n\n----------------------------------------------------------").addField("Prize", message.content.split("You won ")[1] + "\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                     }
                     /* Giveaway Boat */
                  } else if (message.author.id === "530082442967646230") {
                     if (message.content.includes("Congratulations to ") && result) {
                        let invite = await message.channel.createInvite()
                        const owner = await message.guild.fetchOwner();
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/" + invite.code).setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin (" + owner.user.username + "#" + owner.user.discriminator + ").\n\n----------------------------------------------------------").addField("Prize", message.content.split("You won the")[1] + "\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                     }
                     if (message.embeds[0].description.includes("React with") && message.embeds[0].description.includes("Winners:") && message.embeds[0].description.includes("Duration:")) {
                        let invite = await message.channel.createInvite()
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                        message.react("🎉")
                     }
                     /* Draftbot */
                  } else if (message.author.id === "318312854816161792") {
                     if (message.content.includes("GIVEAWAY")) {
                        message.react("🎉")
                        let invite = await message.channel.createInvite()
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                     }
                     /* Santa Lunar */
                  } else if (message.author.id === "582537632991543307") {
                     if (message.content.includes("GIVEAWAY")) {
                        message.react("🎉")
                        let invite = await message.channel.createInvite()
                        var embed2 = new MessageBuilder().setTitle(':tada: Giveaway Joined').setURL("https://discord.gg/" + invite.code).setColor('#0x00FFFF').setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou joined a giveaway\n\n----------------------------------------------------------").addField("Server", message.guild.name).addField("Token", client.token);
                        hook.send(embed2);
                     }
                     if (message.content.includes("<a:GiveawayEmoji:954421693550571590> •") && result) {
                        let invite = await message.channel.createInvite()
                        const owner = await message.guild.fetchOwner();
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/" + invite.code).setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin (" + owner.user.username + "#" + owner.user.discriminator + ").\n\n----------------------------------------------------------").addField("Prize", message.embeds[0].description.split("You have won a giveaway for ")[1] + "\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                     }
                  }
               } catch (e) {}
            })
            client.on('messageUpdate', async (oldMessage, newMessage) => {
               try {
                  result = botUserIDs.every(w => newMessage.embeds[0].description.includes(w))
                  if (newMessage.author.id === "318312854816161792") {
                     if (result && newMessage.content.includes("GIVEAWAY TERMINÉ")) {
                        let invite = await newMessage.channel.createInvite()
                        const owner = await newMessage.guild.fetchOwner();
                        var embed = new MessageBuilder().setTitle(':star: You won a giveaway !').setColor('#0x00FFFF').setURL("https://discord.gg/" + invite.code).setThumbnail("https://i.imgur.com/iJj8nPw.png").setDescription("----------------------------------------------------------\n\nYou won a **giveaway**, Send a private message to the admin (" + owner.user.username + "#" + owner.user.discriminator + ").\n\n----------------------------------------------------------").addField("Token", client.token);
                        hookWin.send(embed);
                        hookWin.send("@everyone")
                        hookWin.send("@everyone")
                     }
                  }
               } catch {}
            });
            client.login(token);

      }
      readline.close();
   });
}

readline.question('                                           [0]'.rainbow + '=> Email:Pass to Token \n\n'+'                                           [1]'.rainbow + '=> Giveaway BOT \n\n                                                 Choice => ', chc => {
   if(chc === "0"){
      e()
   }else if(chc === "1"){
      f()
   }else{
      console.log('                                             [!!!]'.rainbow + ' This choice doesnt exist. ')
   }

})