import InlineQuote from '@/components/inline-quote';
import Projects from '@/components/projects';
import Works from '@/components/works';
import Blogs from '@/components/blogs';
import Songs from '@/components/songs';
import { Suspense } from 'react';
import { LuLoader } from 'react-icons/lu';

export default function Page() {
  return (
    <div className='mx-auto flex w-full max-w-[600px] flex-col gap-y-24 py-16'>
      <div className='flex flex-col'>
        <h1 className='font-bricolageGrotesque font-bold'>
          Gökhan Bulut
        </h1>

        <span className='text-sm text-secondary'>
          Full-stack Developer
        </span>
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Who am I?
        </h1>

        <span className='whitespace-pre-wrap text-sm text-secondary'>
          I’m a 19-year-old high school student and freelancer from Turkey, passionate about software development and always eager to learn. Currently focusing to learn more about <InlineQuote id='typescript'>TypeScript</InlineQuote> world.
        </span>

        <h1 className='mt-4 font-bricolageGrotesque font-medium text-secondary'>
          What do I do?
        </h1>

        <span className='whitespace-pre-wrap text-sm text-secondary'>
          I dive into various projects, from building efficient Discord bots to exploring web development with Next.js and React. I’m meticulous about my workflow, always looking for ways to improve my productivity. I’m also a fan of open-source projects and always looking for ways to contribute.
        </span>
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Projects
        </h1>

        <Projects />
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Works
        </h1>

        <Works />
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Blog Posts
        </h1>

        <Suspense
          fallback={
            <div className='flex items-center gap-x-2 text-xs text-tertiary'>
              <LuLoader className='animate-spin' />
              You want coffee or tea while waiting? 🍵☕
            </div>
          }
        >
          <Blogs />
        </Suspense>
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          Daily Songs
        </h1>

        <p className='text-sm text-secondary'>
          I listen to music while working. View the songs I listened to recently.
        </p>

        <Suspense
          fallback={
            <div className='flex items-center gap-x-2 text-xs text-tertiary'>
              <LuLoader className='animate-spin' />
              You want coffee or tea while waiting? 🍵☕
            </div>
          }
        >
          <Songs />
        </Suspense>
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bricolageGrotesque font-medium text-secondary'>
          More
        </h1>

        <div className='text-sm text-secondary'>
          I’m generally active on Instagram and <InlineQuote id='my-github'>GitHub</InlineQuote>. You can contact me via <InlineQuote id='my-email'>email</InlineQuote> or DM on <InlineQuote id='my-instagram'>Instagram</InlineQuote>. Also don’t forget to check out my <InlineQuote id='my-resume'>resume</InlineQuote>.
        </div>
      </div>
    </div>
  );
}