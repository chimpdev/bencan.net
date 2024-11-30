'use client';

import cn from '@/utils/cn';
import { useEffect, useState } from 'react';
import Tooltip from '@/components/tooltip';
import Link from 'next/link';

type DiscordStatusProps = {
  userId: string;
}

export default function DiscordStatus({ userId }: DiscordStatusProps) {
  type Status = 'online' | 'offline' | 'loading' | 'error';

  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    async function getStatus() {
      try {
        const response = await fetch(`https://lantern.rest/api/v1/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch status');

        const data = await response.json();

        setStatus(data.status === 'offline' ? 'offline' : 'online');
      } catch (error) {
        console.error(`Something went wrong: ${error}`);
        setStatus('error');
      }
    }

    getStatus();
  }, [userId]);

  return (
    <Tooltip
      content='Discord status powered by lantern.rest'
      side='bottom'
    >
      <Link
        className='flex select-none items-center gap-x-2 text-xs font-medium text-tertiary transition-opacity hover:opacity-70'
        href={'https://lantern.rest'}
      >
        <div
          className={cn(
            'relative size-2 rounded-full',
            (status === 'loading' || status === 'error' || status === 'offline') && 'bg-quaternary [&>span]:bg-quaternary',
            status === 'online' && 'bg-green-500 [&>span]:bg-green-500'
          )}
        >
          <span className='absolute size-2 animate-ping rounded-full' />
        </div>

        {status === 'loading' || status === 'error' || status === 'offline' ? 'Offline' : 'Online'}
      </Link>
    </Tooltip>
  );
}