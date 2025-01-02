import type { Client } from 'discord.js';

declare global {
  var client: Client;

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      SPOTIFY_CLIENT_ID: string;
      SPOTIFY_CLIENT_SECRET: string;
      SPOTIFY_REDIRECT_URL: string;
      SPOTIFY_REFRESH_TOKEN: string;
      DISCORD_BOT_TOKEN: string;
    }
  }
}

export {};