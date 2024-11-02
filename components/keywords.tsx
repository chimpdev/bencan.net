'use client';

import { SiMongodb, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { useMedia } from 'react-use';
import Tooltip from '@/components/tooltip';
import type { IconType } from 'react-icons';

type KeywordDataType = {
  label: string;
  icon: IconType;
  tooltip: string;
  color: string;
};

export default function Page() {
  // @ts-expect-error - useMedia only accepts boolean | undefined as the default value
  const isDarkMode = useMedia('(prefers-color-scheme: dark)', 'loading');

  const keywords: KeywordDataType[] = [
    {
      label: 'Next.js',
      icon: SiNextdotjs,
      tooltip: 'A React framework for building server-rendered applications.',
      color: isDarkMode === true ? '#ffffff' : '#000000'
    },
    {
      label: 'Typescript',
      icon: SiTypescript,
      tooltip: 'A typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#3178C6'
    },
    {
      label: 'Node.js',
      icon: SiNodedotjs,
      tooltip: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      color: '#43853D'
    },
    {
      label: 'Tailwind CSS',
      icon: SiTailwindcss,
      tooltip: 'A utility-first CSS framework for rapidly building custom designs.',
      color: '#38B2AC'
    },
    {
      label: 'MongoDB',
      icon: SiMongodb,
      tooltip: 'A general purpose, document-based, distributed database.',
      color: '#47A248'
    }
  ];

  // @ts-expect-error - isDarkMode can be 'loading' as well
  const isLoading = isDarkMode === 'loading';

  return (
    <div className='mt-4 grid grid-cols-2 flex-wrap gap-2 mobile:grid-cols-3 sm:flex'>
      {isLoading ? (
        new Array(keywords.length).fill(null).map((_, index) => (
          <div
            key={index}
            className='h-6 w-16 animate-pulse bg-quaternary'
          />
        ))
      ) : (
        keywords.map(({ label, icon: Icon, tooltip, color }) => (
          <Tooltip
            key={label}
            content={tooltip}
          >
            <div
              className='flex h-6 select-none items-center gap-2 rounded-full border border-primary bg-secondary px-2.5 text-sm'
            >
              {Icon && <Icon size={12} color={color} />}

              <span className='text-xs text-tertiary'>{label}</span>
            </div>
          </Tooltip>
        ))
      )}
    </div>
  );
}