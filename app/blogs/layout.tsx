'use client';

import cn from '@/utils/cn';
import { Link } from 'next-view-transitions';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();

  const [title, setTitle] = useState('');

  useEffect(() => {
    const headings = document.querySelectorAll('h2, h3, h4, h5, h6');

    function handleHeadingClick(event: Event): void {
      const target = event.target as HTMLElement;
      const id = target.id;

      if (id) {
        router.push(`#${id}`);

        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    headings.forEach(headingElement => headingElement.addEventListener('click', handleHeadingClick));

    return () => {
      headings.forEach(headingElement => headingElement.removeEventListener('click', handleHeadingClick));
    };
  }, [router]);

  useEffect(() => {
    const currentHash = window.location.hash;

    if (currentHash) {
      const element = document.getElementById(currentHash.slice(1));

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }

    setTitle(document.title);
  }, []);

  return (
    <div className='mx-auto flex w-full max-w-[600px] flex-col gap-y-10 py-16'>
      <Link
        className='flex flex-col'
        href='/'
      >
        <h1 className='font-bricolageGrotesque font-bold'>
          {title === '' ? 'bencan.net' : title.split(' - ').shift()}
        </h1>

        <span className='text-sm text-tertiary'>
          Gökhan Bulut
        </span>
      </Link>

      <div
        className={cn(
          'w-full max-w-full lg:max-w-3xl markdown prose min-w-[0px] dark:prose-invert',
          'prose-blockquote:border-l-primary prose-blockquote:text-tertiary',
          'prose-li:marker:text-tertiary',
          'prose-thead:border-b-[rgba(var(--bg-quaternary))] prose-tr:border-b-[rgba(var(--bg-tertiary))]',
          'prose-p:whitespace-pre-wrap',
          'prose-pre:bg-[unset] prose-pre:p-0',
          'prose-headings:mt-14 prose-headings:mb-4 prose-headings:text-primary prose-headings:text-base prose-headings:font-semibold prose-headings:font-bricolageGrotesque',
          'prose-code:after:hidden prose-code:before:hidden'
        )}
      >
        {children}
      </div>
    </div>
  );
}