import Link from 'next/link';
import { Metadata } from 'next/types';
import fs from 'node:fs';
import React from 'react';

export default async function Blogs() {
  const blogFiles = fs.readdirSync('app/blogs');

  const blogs = await Promise.all(blogFiles
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    .filter(file => fs.statSync(`app/blogs/${file}`).isDirectory())
    // We only want directories, to prevent layout.tsx or any non mdx type of files not to be included
    .map(async file => {
      const blog = await import(`../../app/blogs/${file}/page.mdx`);

      return {
        id: file.replace(/\.mdx/, ''),
        metadata: blog.metadata as Metadata,
        component: blog.default as React.FC
      };
    }));

  return (
    blogs
      .sort((a, b) => new Date(b.metadata?.date || 0).getTime() - new Date(a.metadata?.date || 0).getTime())
      .map(item => {
        if (typeof item.metadata?.title !== 'string') return;

        return (
          <Link
            href={`/blogs/${item.id}`}
            key={item.id}
            className='group relative z-10 flex w-full flex-col gap-y-2'
          >
            <div className='absolute left-0 top-0 -z-10 h-[130%] w-[105%] translate-x-[-2.5%] translate-y-[-12%] rounded-xl bg-secondary opacity-0 transition-opacity duration-75 group-hover:opacity-100' />

            <h2 className='font-medium text-primary'>
              {item.metadata.title}
            </h2>

            <p className='text-tertiary'>
              {item.metadata.description}
            </p>
          </Link>
        );
      })
  );
}