/**
 * Retrieves a new Spotify access token using the refresh token.
 *
 * @returns {Promise<string>} A promise that resolves to the new access token.
 * @throws {Error} If any of the required environment variables are missing or if the request fails.
 *
 * Environment Variables:
 * - `SPOTIFY_CLIENT_ID`: The Spotify client ID.
 * - `SPOTIFY_CLIENT_SECRET`: The Spotify client secret.
 * - `SPOTIFY_REFRESH_TOKEN`: The Spotify refresh token.
 */
export default async function getNewAccessToken(): Promise<string> {
  if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) {
    throw new Error('Missing environment variables.');
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)}`
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
    }),
    next: {
      revalidate: 3500
    }
  });

  if (!response.ok) throw new Error('Failed to get new access token.');

  const data = await response.json();

  return data.access_token;
}