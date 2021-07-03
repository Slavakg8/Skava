//Автор данного бота - Slava
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");


var canalbot = 'бот-чат'

client.on('ready', () => {
  console.log(`Бот авторизировался как ${client.user.tag}!`);
});





client.on('message', message => {//Пишет текст в чат
	if(message.author.id !== config.ownerID) return;//админ
    if(message.content.startsWith(config.prefix + 'лаф')) {
        message.channel.sendMessage('Создатель данного сервера, пускает свой слюнки по тянкам :)');
     }
});
//---------------------------- Команды --------------------------------
client.on('message', message => {//Пишет текст в чат
    if(message.author === client.user) return;
    if(message.content.startsWith(config.prefix + 'автор')) {
        message.channel.sendMessage('Мой разработчик, это Бикбай :)');
     }
});

client.on('message', message => {//Пишет текст в чат
    if(message.author === client.user) return;
    if(message.content.startsWith(config.prefix + 'послать')) {
        message.channel.sendMessage('${user.username}, Я посылаю тебя нахуй, нагла и смела!');
     }
});

//---------------------------- Ответы --------------------------------
client.on('message', msg => {//Отвечает игроку
  if (msg.content === 'привет') {
    msg.reply('привет :)');
  }
});

client.on('message', msg => {//Отвечает игроку
  if (msg.content === 'пока') {
    msg.reply('пока :(');
  }
});

//------------------------ Сообщения от бота -------------------------------
// Создать слушателя событий для новых членов гильдии
client.on('guildMemberAdd', member => {
  // Отправьте сообщение на указанный канал на сервере:
  const channel = member.guild.channels.find('name', canalbot);
  // Не делайте ничего, если канал не найден на этом сервере
  if (!channel) return;
  // Отправить сообщение, указав участника
  channel.send(`Добро пожаловать, ${member}`);
});

// Создать слушателя событий для новых членов гильдии
client.on('guildMemberRemove', member => {
  // Отправьте сообщение на указанный канал на сервере:
  const channel = member.guild.channels.find('name', canalbot);
  // Не делайте ничего, если канал не найден на этом сервере
  if (!channel) return;
  // Отправить сообщение, указав участника
  channel.send(`Очень жаль, но ${member} покинул сервер!`);
});
//--------------------------------------------------------------------

bot.run(srt(token))
