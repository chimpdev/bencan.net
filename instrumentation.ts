export async function register() {
  if (!process.env.DISCORD_BOT_TOKEN) return;

  const Discord = await import('discord.js');

  const client = new Discord.Client({
    intents: []
  });

  global.client = client;

  client.on('ready', () => {
    console.log(`Logged in as ${client.user!.tag}`);
  });

  client.login(process.env.DISCORD_BOT_TOKEN)
    .catch(error => {
      console.error('Failed to login:', error);
    });
}