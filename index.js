const DBD = require("dbd.js")
var fs = require('fs');
const keep_alive = require("./keep_alive.js")
const bot = new DBD.Bot({
  token: process.env['token'],
  prefix: "H!",
  mobile: false,
  fetchInvites: true
})
bot.onMessage()
var reader = fs.readdirSync("./komutlar").filter(file => file.endsWith(".js"))
for (const file of reader) {
  const command = require(`./komutlar/${file}`)
  bot.command({
    name: command.name,
    aliases: command.aliases,
    bkz: command.bkz,
    code: command.code
  });
}
