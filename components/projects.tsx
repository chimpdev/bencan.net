import { Link } from 'next-view-transitions';

export default function Projects() {
  const data = [
    {
      name: 'discord.place',
      link: 'https://discord.place',
      description: 'A hub for everything Discord. No matter what you’re looking for, you can find it here. A project I’m proud to develop and maintain.'
    },
    {
      name: 'lantern.rest',
      link: 'https://github.com/discordplace/lantern',
      description: 'Broadcast your active Discord status to an API endpoint and WebSocket connection. Ready to use or self-host.'
    },
    {
      name: 'discordsfx.com',
      link: 'https://discord.place/sounds',
      description: 'Find short mp3 files for Discord Soundboard. My first Next.js project, now part of discord.place.'
    },
    {
      name: 'Distalk Bot',
      link: 'https://discord.com/oauth2/authorize?client_id=1243615735272570912',
      description: 'A Discord bot for anonymous conversations. Ensures privacy and secure interactions. Made with Typescript and MongoDB.'
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