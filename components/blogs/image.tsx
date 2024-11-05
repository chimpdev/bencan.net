import NextImage from 'next/image';

interface ImageProps {
  src: string,
  alt: string,
  width?: number,
  height?: number
}

export default function Image({ src, alt, width = 600, height = 400 }: ImageProps) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className='rounded-2xl border border-primary'
      />

      <span className='-mt-5 text-xs text-tertiary'>
        {alt}
      </span>
    </div>
  );
}