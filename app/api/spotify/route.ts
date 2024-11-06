import { NextResponse } from 'next/server';

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URL;

export async function GET(): Promise<Response> {
  if (process.env.NODE_ENV !== 'development') return NextResponse.json({ error: 'not_implemented' }, { status: 501 });

  const scope = 'user-read-recently-played';

  const url = new URL('https://accounts.spotify.com/authorize');

  url.searchParams.set('response_type', 'code');
  url.searchParams.set('client_id', CLIENT_ID);
  url.searchParams.set('scope', scope);
  url.searchParams.set('redirect_uri', REDIRECT_URI);

  return NextResponse.redirect(url.toString());
}