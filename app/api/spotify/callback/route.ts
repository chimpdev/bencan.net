import { NextRequest, NextResponse } from 'next/server';
import btoa from 'btoa';
import type { SpotifyTokenResponse } from '@/types';

export async function GET(request: NextRequest) {
  if (process.env.NODE_ENV !== 'development') return NextResponse.json({ error: 'not_implemented' }, { status: 501 });

  const url = new URL(request.url);

  const code = url.searchParams.get('code');
  if (!code) return NextResponse.json({ error: 'missing_params' }, { status: 400 });

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${btoa(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`)}`
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URL
    })
  });

  if (!response.ok) return NextResponse.json({ error: 'failed_to_get_token' }, { status: 400 });

  const data: SpotifyTokenResponse = await response.json();

  return NextResponse.json(data.access_token);
}