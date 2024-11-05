'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import cn from '@/utils/cn';
import { useMedia } from 'react-use';
import CopyCodeButton from '@/components/blogs/copy-code-button';

interface CodeBlockProps {
  children: React.ReactNode,
  icon: React.ReactNode,
  fileName: string,
  language: string,
  dimmed?: boolean
}

export default function CodeBlock({ children, icon: Icon, fileName, language, dimmed = true }: CodeBlockProps) {
  const prefersDark = useMedia('(prefers-color-scheme: dark)', false);

  return (
    <div className='rounded-xl border border-primary'>
      <div
        className={cn(
          'flex justify-between w-full px-4 py-2 -mb-2 border-b font-geist border-b-primary bg-secondary rounded-t-xl',
          !dimmed && 'bg-[rgba(var(--bg-quaternary))]'
        )}
      >
        <div className='flex items-center gap-x-1.5 text-xs text-tertiary'>
          {Icon}

          {fileName}
        </div>

        <CopyCodeButton code={String(children).replace(/\n$/, '')} />
      </div>

      <SyntaxHighlighter
        PreTag={'div'}
        // eslint-disable-next-line react/no-children-prop
        children={String(children).replace(/\n$/, '')}
        language={language}
        style={prefersDark ? oneDark : oneLight}
        wrapLongLines={false}
        className={cn(
          '!bg-[unset] !mb-0 max-w-[calc(100vw_-_4rem)] [&>code]:!bg-[unset]',
          !dimmed && '!bg-[rgba(var(--bg-tertiary))] [&>code]:!bg-[rgba(var(--bg-tertiary))]'
        )}
      />
    </div>
  );
}