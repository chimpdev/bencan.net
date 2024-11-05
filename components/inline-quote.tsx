'use client';

import Tooltip from '@/components/tooltip';
import Link from 'next/link';

interface InlineQuoteProps {
  children: React.ReactNode,
  id: string
}

export default function InlineQuote({ children, id }: InlineQuoteProps) {
  const contents = [
    {
      id: 'typescript',
      content: 'TypeScript is a superset of JavaScript that adds static typing to the language. It’s a powerful tool that helps you catch bugs and improve code quality.'
    },
    {
      id: 'my-github',
      href: 'https://github.com/chimpdev'
    },
    {
      id: 'my-email',
      href: 'mailto:skyhancloud@gmail.com'
    },
    {
      id: 'my-instagram',
      href: 'https://instagram.com/gokhanknows'
    },
    {
      id: 'my-resume',
      href: '/resume.pdf'
    }
  ];

  const foundItem = contents.find(content => content.id === id);
  if (!foundItem) return children;

  return (
    foundItem.href ? (
      <Link
        href={foundItem.href}
        target='_blank'
        className='inline whitespace-normal break-words underline decoration-tertiary decoration-dotted underline-offset-4 transition-colors hover:decoration-primary'
      >
        {children}
      </Link>
    ) : (
      <Tooltip
        content={foundItem.content}
        side='top'
        delayDuration={200}
        contentClassOverride='sm:max-w-[500px] !rounded-md'
        disableHoverableContent={false}
      >
        <div className='inline cursor-help whitespace-normal break-words underline decoration-tertiary decoration-dotted underline-offset-4 transition-colors hover:decoration-primary'>
          {children}
        </div>
      </Tooltip>
    )
  );
}