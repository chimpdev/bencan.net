import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';

export default function AboutTab() {
  const aboutText = 'I’m a 19-year-old high school student and freelancer, passionate about software development and always eager to learn. I dive into various projects, from building efficient Discord bots to exploring web development with Next.js and React.\n\nI’m meticulous about my workflow, using GitHub Actions for automation, optimizing APIs, and implementing caching and validation systems. I like building projects that are useful, like my Discord resource hub and personal portfolio.\n\nI enjoy adding a bit of irony and teasing to keep things fun. Overall, I’m driven by curiosity, continuous improvement, and a love for creating.';

  const contacts = [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/gokhanknows',
      text: 'gokhanknows'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/chimpdev',
      text: 'chimpdev'
    },
    {
      label: 'Email',
      href: 'mailto:skyhancloud@gmail.com',
      text: 'skyhancloud@gmail.com'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/g%C3%B6khan-bulut-707282242',
      text: 'Gökhan Bulut'
    }
  ];

  return (
    <div className='flex flex-col gap-y-2'>
      <h2 className='text-sm font-medium tracking-wide'>
        About
      </h2>

      <p className='whitespace-pre-wrap text-sm text-tertiary sm:text-justify'>
        {aboutText}
      </p>

      <h2 className='mt-6 text-sm font-medium tracking-wide'>
        Contact
      </h2>

      <div className='mb-24 mt-4 flex flex-col gap-y-0.5 text-sm'>
        {contacts.map(contact => (
          <div
            className='flex items-center'
            key={contact.label}
          >
            <span className='min-w-[100px] font-medium text-tertiary'>
              {contact.label}
            </span>

            <Link
              href={contact.href}
              target='_blank'
              className='underline-offset-2 hover:underline'
            >
              {contact.text}
              <MdArrowOutward size={12} className='ml-1 inline' />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}