import Image_DiscordPlaceLogo from '@/public/images/projects/0-0.jpg';
import Image_DiscordPlacePreview from '@/public/images/projects/0-1.png';
import Image_LanternLogo from '@/public/images/projects/1.png';
import Image_DiscordSFXLogo from '@/public/images/projects/2-0.png';
import Image_DiscordSFXPreview from '@/public/images/projects/2-1.png';
import Image_DistalkBotLogo from '@/public/images/projects/3.png';
import cn from '@/utils/cn';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import Gallery from '@/components/gallery';
import type { StaticImageData } from 'next/image';

type ProjectDataType = {
  name: string;
  link?: string;
  description: string;
  images?: StaticImageData[];
  isSideProject?: boolean;
};

export default function ProjectsTab() {
  const data: ProjectDataType[] = [
    {
      name: 'discord.place',
      link: 'https://discord.place',
      description: 'discord.place is your comprehensive hub for everything related to Discord. Whether you\'re a developer, server owner, or a regular user, discord.place offers valuable resources to enhance your Discord experience.\n\nFrom finding perfect emojis for your Discord servers to discovering the latest bots and servers, discord.place caters to all your Discord needs. Enjoy easy navigation and up-to-date content designed to help you make the most out of your Discord interactions.',
      images: [Image_DiscordPlaceLogo, Image_DiscordPlacePreview]
    },
    {
      name: 'lantern.rest',
      link: 'https://github.com/discordplace/lantern',
      description: 'Lantern is a powerful service designed to effortlessly broadcast your active Discord status to both a RESTful API endpoint and a WebSocket connection. Want to showcase your current Spotify tracks on your personal site? Lantern has you covered.\n\nWhile Lantern is ready to use out-of-the-box without the need for any deployment, it also offers the flexibility for self-hosting with minimal setup. Enjoy seamless integration and real-time updates with Lantern.',
      images: [Image_LanternLogo]
    },
    {
      name: 'discordsfx.com',
      link: 'https://discord.place/sounds',
      description: 'discordsfx.com was a website that allowed you to find short mp3 files, no longer than 5 seconds, for the Soundboard feature of your Discord servers, or share them for others. It was my first Next.js project.\n\nI used Express and MongoDB on the backend. Nowadays, it continues its life in /sounds under the name of another project of mine, discord.place.',
      images: [Image_DiscordSFXLogo, Image_DiscordSFXPreview]
    },
    {
      name: 'Distalk Bot',
      link: 'https://discord.com/oauth2/authorize?client_id=1243615735272570912',
      description: 'Distalk is a Discord bot designed to facilitate anonymous and secure conversations between users. It ensures privacy by not collecting any user data, allowing for private and enjoyable interactions.\n\nYou can join the queue using the /join command and start texting when you match with someone. All messages you send to the bot are forwarded to the other user. Made using Typescript and MongoDB. My first Typescript experience.',
      images: [Image_DistalkBotLogo],
      isSideProject: true
    }
  ];

  return (
    <div className='mb-24 flex flex-col gap-y-8 border-l-2 border-[rgba(var(--bg-secondary))] pl-6'>
      {data.map((item, index) => {
        const LinkContainer = item.link ? Link : 'div';

        return (
          <div
            className='relative flex flex-col gap-y-1 text-sm'
            key={index}
          >
            <div className='absolute left-[-33.8px] top-[4px] size-[18px] rounded-full border-4 border-[rgba(var(--bg-background))] bg-quaternary' />

            <div className='flex items-center justify-between'>
              <LinkContainer
                className={cn(
                  item.link && 'text-pretty hover:underline underline-offset-4'
                )}
                href={item.link || '#'}
                target='_blank'
              >
                {item.name}

                {item.link && <MdArrowOutward className='ml-1 inline' />}
              </LinkContainer>

              {item.isSideProject && (
                <span className='select-none rounded-full border border-rose-500 bg-rose-600/10 px-2 py-0.5 text-xs font-medium text-rose-500'>
                  Side Project
                </span>
              )}
            </div>

            <p className='whitespace-pre-wrap text-tertiary sm:text-justify'>
              {item.description}
            </p>

            {item.images?.length && (
              <div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex'>
                <Gallery images={item.images} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}