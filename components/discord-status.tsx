'use client';

import cn from '@/utils/cn';
import { useEffect, useState } from 'react';
import Tooltip from '@/components/tooltip';
import { Link } from 'next-view-transitions';
import type { LanternSpotify } from '@/types';
import Image from 'next/image';

type DiscordStatusProps = {
  userId: string;
}

export default function DiscordStatus({ userId }: DiscordStatusProps) {
  type Status = 'online' | 'offline' | 'loading' | 'error';

  const [status, setStatus] = useState<Status>('loading');
  const [spotify, setSpotify] = useState<LanternSpotify | null>(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://lantern.rest/api/v1/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch status');

        const data = await response.json();

        setStatus(data.status === 'offline' ? 'offline' : 'online');

        if (data.active_platforms.spotify !== null) setSpotify(data.active_platforms.spotify);
      } catch (error) {
        console.error(`Something went wrong: ${error}`);

        setStatus('error');
      }
    }

    getData();
  }, [userId]);

  const isOffline = status === 'loading' || status === 'error' || status === 'offline';

  return (
    <Tooltip
      content='Discord status powered by lantern.rest'
      side='bottom'
    >
      <Link
        className='flex cursor-pointer flex-col items-end transition-opacity hover:opacity-70'
        href='https://lantern.rest'
      >
        {!isOffline && spotify && (
          <div className='hidden items-center gap-x-2 sm:flex'>
            <Image
              src={spotify.album_cover}
              height={20}
              width={20}
              alt={`${spotify.song} by ${Array.isArray(spotify.artist) ? spotify.artist.join(', ') : spotify.artist}`}
              className='size-4 animate-spin rounded-full [animation-duration:3s]'
            />

            <div className='flex items-center gap-x-1 text-xs'>
              <span className='text-tertiary'>Listening to</span>

              <div className='max-w-[100px] truncate'>{spotify.song}</div>

              <span className='text-tertiary'>by</span>

              {Array.isArray(spotify.artist) ? spotify.artist.join(', ') : spotify.artist}
            </div>
          </div>
        )}

        <div className='flex select-none items-center gap-x-2 text-xs font-medium text-tertiary'>
          <div
            className={cn(
              'relative size-2 rounded-full',
              isOffline && 'bg-quaternary [&>span]:bg-quaternary',
              status === 'online' && 'bg-green-500 [&>span]:bg-green-500'
            )}
          >
            <span className='absolute size-2 animate-ping rounded-full' />
          </div>

          {isOffline ? 'Offline' : 'Online'}
        </div>
      </Link>
    </Tooltip>
  );
}