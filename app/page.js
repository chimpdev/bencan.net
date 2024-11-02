import Image from 'next/image';
import Keywords from '@/components/keywords';
import Tabs from '@/components/tabs';
import mePicture from '@/public/me.jpg';

export default function Page() {
  return (
    <div className='relative mx-auto flex w-full max-w-2xl flex-col items-center px-8 pt-28'>
      <Image
        src={mePicture}
        alt='My picture'
        width={96}
        height={96}
        className='rounded-full'
        placeholder='blur'
      />

      <h1 className='mt-4 text-xl font-bold'>
        Gökhan Bulut
      </h1>

      <h2 className='mt-2 text-sm tracking-wide text-secondary'>
        Software Engineer
      </h2>

      <p className='mt-4 max-w-lg text-center text-sm tracking-wide text-tertiary'>
        19 years old software engineer from Turkey. I am interested in web development and open source projects.
      </p>

      <Keywords />

      <Tabs />
    </div>
  );
}