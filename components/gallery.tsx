import Image, { StaticImageData } from 'next/image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

type GalleryProps = {
  images: StaticImageData[];
};

export default function Gallery({ images }: GalleryProps) {
  return images.map((image, index) => (
    <Zoom
      key={index}
      zoomImg={{
        width: 1000,
        height: 1000
      }}
      zoomMargin={20}
    >
      <Image
        src={image}
        alt='Gallery image'
        width={1024}
        height={1024}
        className='relative z-0 h-[90px] w-[175px] cursor-pointer rounded-lg border border-primary object-cover'
        placeholder='blur'
      />
    </Zoom>
  ));
}