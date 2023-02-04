// Require the necessary discord.js classes
//原:const { Client, Events, GatewayIntentBits } = require('discord.js');
import { Client, Events, GatewayIntentBits } from'discord.js'
import dotenv from "dotenv"
//const { token } = require('./config.json'); 暫時用不到

dotenv.config()

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
//原:client.login(token);
client.login(process.env.TOKEN);