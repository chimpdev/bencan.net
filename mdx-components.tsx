import cn from '@/utils/cn';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';
import { RiLink } from 'react-icons/ri';
import { MdArrowOutward } from 'react-icons/md';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  function Heading({ children, level }: { children: React.ReactNode; level: number }) {
    const id = String(children).toLowerCase().replace(/\s/g, '-');
    const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    return (
      <Tag
        id={id}
        className='group relative flex cursor-pointer scroll-mt-8 items-center'
      >
        <RiLink
          className='pointer-events-none absolute left-[-25px] text-tertiary opacity-0 transition-opacity group-hover:opacity-100'
          size={14}
        />

        {children}
      </Tag>
    );
  }

  return {
    ...components,
    h2: ({ children, ...props }) => <Heading {...props} level={2}>{children}</Heading>,
    h3: ({ children, ...props }) => <Heading {...props} level={3}>{children}</Heading>,
    h4: ({ children, ...props }) => <Heading {...props} level={4}>{children}</Heading>,
    h5: ({ children, ...props }) => <Heading {...props} level={5}>{children}</Heading>,
    h6: ({ children, ...props }) => <Heading {...props} level={6}>{children}</Heading>,
    a: ({ children, href }) => (
      <Link
        href={href || '#'}
        className='group underline decoration-tertiary decoration-dotted underline-offset-4 transition-colors hover:decoration-primary'
      >
        {children}

        <MdArrowOutward
          className='ml-1 inline-block text-tertiary transition-colors group-hover:text-primary'
          size={14}
        />
      </Link>
    ),
    code: ({ children, className }) => {
      return (
        <code
          className={cn(
            className,
            'px-1 py-0.5 border border-primary text-sm font-medium bg-secondary text-primary rounded before:content-[""] after:content-[""]'
          )}
        >
          {children}
        </code>
      );
    }
  };
}