'use client';

import Tooltip from '@/components/tooltip';
import { Link } from 'next-view-transitions';

interface InlineQuoteProps {
  children: React.ReactNode,
  text?: string,
  href?: string
}

export default function InlineQuote({ children, text, href }: InlineQuoteProps) {
  if (!text && !href) return children;

  return (
    href ? (
      <Link
        href={href}
        target='_blank'
        className='inline whitespace-normal break-words underline decoration-tertiary decoration-dotted underline-offset-4 transition-colors hover:decoration-primary'
      >
        {children}
      </Link>
    ) : (
      <Tooltip
        content={text}
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