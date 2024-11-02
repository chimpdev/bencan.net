import Image_Kipt from '@/public/images/work/0.png';
import Image_Barisyasamancom from '@/public/images/work/1.png';
import cn from '@/utils/cn';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import Gallery from '@/components/gallery';

export default function WorkTab() {
  const data = [
    {
      role: 'Frontend Developer',
      company: 'Kişilerarası İlişkiler Psikoterapisi Derneği',
      link: 'https://kisilerarasiiliskilerterapisi.com',
      location: 'Remote',
      description: 'I modernised the website by preserving the old content, designed a website from scratch and turned it into an application with React & Tailwind CSS.',
      images: [Image_Kipt],
      start: '2023'
    },
    {
      role: 'Full-stack Developer',
      company: 'barisyasaman.com',
      link: 'https://secim.barisyasaman.com',
      description: 'A site that simulates the Turkish elections and displays the results live on the Turkey map, connected to a Discord bot. I used React, SQLite, Tailwind CSS and Express.',
      images: [Image_Barisyasamancom],
      start: '2023'
    },
    {
      role: 'Discord Bots',
      company: 'Discord',
      description: 'I have been coding Discord bots for a long time using Node.js. Using the discord.js library, I make advanced bots.',
      start: '2020'
    }
  ];

  return (
    <div className='mb-24 flex flex-col gap-y-8 border-l-2 border-[rgba(var(--bg-secondary))] pl-6'>
      {data
        .sort((a, b) => new Date(b.start) - new Date(a.start))
        .map((item, index) => {
          const LinkContainer = item.link ? Link : 'div';

          return (
            <div
              className='relative flex flex-col gap-y-1 text-sm'
              key={index}
            >
              <div className='absolute left-[-33.8px] top-[4px] size-[18px] rounded-full border-4 border-[rgba(var(--bg-background))] bg-quaternary' />

              <LinkContainer
                className={cn(
                  item.link && 'text-pretty hover:underline underline-offset-4'
                )}
                href={item.link}
                target='_blank'
              >
                {item.role} at {item.company}

                {item.link && <MdArrowOutward className='ml-1 inline' />}
              </LinkContainer>

              <div className='flex items-center gap-2'>
                {item.location && (
                  <span className='mb-1 text-secondary'>
                    {item.location}
                  </span>
                )}

                <div className='text-xs text-tertiary'>
                  {item.start} — {item.end || 'Ongoing'}
                </div>
              </div>

              <p className='text-tertiary sm:text-justify'>
                {item.description}
              </p>

              {item.images?.length > 0 && (
                <div className='mt-4 flex gap-4'>
                  <Gallery images={item.images} />
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}