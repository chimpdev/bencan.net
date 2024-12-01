import { Link } from 'next-view-transitions';

export default function Works() {
  const data = [
    {
      name: 'Frontend Developer at Kişilerarası İlişkiler Psikoterapisi Derneği',
      link: 'https://kisilerarasiiliskilerterapisi.com/',
      description: 'I modernised the website by preserving the old content, designed a website from scratch and turned it into an application with React & Tailwind CSS.'
    },
    {
      name: 'Full-stack Developer at barisyasaman.com',
      link: 'https://secim.barisyasaman.com',
      description: 'A site that simulates the Turkish elections and displays the results live on the Turkey map, connected to a Discord bot. I used React, SQLite, Tailwind CSS and Express.'
    },
    {
      name: 'Discord Bots',
      description: 'I have developed many Discord bots for various servers that used by thousands of users. Working with Discord.js and MongoDB.'
    }
  ];

  return (
    <div className='mt-4 flex flex-col gap-y-6'>
      {data.map((item, index) => {
        return (
          <Link
            href={item.link || '#'}
            key={index}
            className='group relative z-10 flex w-full flex-col gap-y-2'
          >
            <div className='absolute left-0 top-0 -z-10 h-[130%] w-[105%] translate-x-[-2.5%] translate-y-[-12%] rounded-xl bg-secondary opacity-0 transition-opacity duration-75 group-hover:opacity-100' />

            <h2 className='font-medium text-primary'>
              {item.name}
            </h2>

            <p className='text-tertiary'>
              {item.description}
            </p>
          </Link>
        );
      })}
    </div>
  );
}