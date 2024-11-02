'use client';

import cn from '@/utils/cn';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import AboutTab from '@/components/about-tab';
import WorkTab from '@/components/work-tab';
import ProjectsTab from '@/components/projects-tab';

export default function Tabs() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    {
      label: 'About',
      id: 'about'
    },
    {
      label: 'Work',
      id: 'work'
    },
    {
      label: 'Projects',
      id: 'projects'
    },
    {
      label: 'Resume',
      id: 'resume',
      href: '/resume.pdf'
    }
  ];

  return (
    <>
      <div className='mt-12 flex w-full border-b border-b-primary'>
        <div className='mx-auto flex w-max gap-8 pb-2'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={cn(
                'relative flex items-center gap-x-1 text-xs font-semibold uppercase outline-none select-none',
                activeTab === tab.id ? 'pointer-events-none text-indigo-500' : 'hover:text-secondary'
              )}
              onClick={() => {
                if (tab.href) router.push(tab.href);
                else setActiveTab(tab.id);
              }}
            >
              {tab.label}

              {tab.href && <MdArrowOutward />}

              {activeTab === tab.id ? (
                <div className='absolute bottom-[-9px] left-0 h-px w-full bg-indigo-500' />
              ) : (
                <div className='absolute -bottom-2 block h-[200%] w-full' />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-8 flex w-full flex-col gap-y-2'>
        {activeTab === 'work' && <WorkTab />}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'about' && <AboutTab />}
      </div>
    </>
  );
}