import getNewAccessToken from '@/utils/getSpotifyAccessToken';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

export const revalidate = 3600;

export default async function Songs() {
  if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET || !process.env.SPOTIFY_REFRESH_TOKEN) {
    console.warn('Environment variables SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, and SPOTIFY_REFRESH_TOKEN are required to render the recently played songs component');

    return (
      <span className='text-tertiary'>
        No data available
      </span>
    );
  }

  const accessToken = await getNewAccessToken();

  const response = await fetch('https://api.spotify.com/v1/me/player/recently-played?limit=5', {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });

  if (!response.ok) throw new Error('Failed to get recently played tracks');

  const tracks: SpotifyApi.UsersRecentlyPlayedTracksResponse = await response.json();

  if (!tracks.items.length) return (
    <span className='text-tertiary'>
      No data available
    </span>
  );

  return tracks.items
    .sort((a, b) => new Date(b.played_at).getTime() - new Date(a.played_at).getTime())
    .map(({ played_at, track }) => (
      <Link
        href={track.album.external_urls.spotify}
        key={`${track.id}-${played_at}`}
        className='group relative z-10 flex w-full items-center gap-x-4'
      >
        <div className='absolute left-0 top-0 -z-10 h-[130%] w-[105%] translate-x-[-2.5%] translate-y-[-12%] rounded-xl bg-secondary opacity-0 transition-opacity duration-75 group-hover:opacity-100' />

        <Image
          src={track.album.images[0].url}
          height={48}
          width={48}
          alt={track.name}
          className='size-12 rounded-lg'
        />

        <div className='flex flex-col'>
          <h2 className='font-medium text-primary'>
            {track.name}
          </h2>

          <div className='flex items-center text-sm text-tertiary'>
            {track.artists.map(({ name }) => name).join(', ')}

            <span className='mx-1'>•</span>

            {new Date(played_at).toLocaleTimeString('en-US', {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </div>
      </Link>
    ));
}