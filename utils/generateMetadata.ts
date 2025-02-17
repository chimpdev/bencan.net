import type { Metadata } from 'next/types';

type CustomMetadata = {
  title?: string;
  description?: string;
  keywords?: string[];
  date?: string;
}

/**
 * Generates metadata for a website.
 *
 * @param {CustomMetadata} metadata - Custom metadata to be added to the generated metadata.
 * @returns {Metadata} The generated metadata object.
 */
export default function generateMetadata(metadata: CustomMetadata = {}): Metadata {
  const generatedMetadata: Metadata = {
    metadataBase: new URL('https://skyhan.cloud'),
    openGraph: {
      title: 'skyhan.cloud',
      type: 'website',
      locale: 'en_US',
      url: 'https://skyhan.cloud',
      images: [
        {
          url: '/og.png',
          width: 960,
          height: 540
        }
      ]
    }
  };

  if (metadata.title) generatedMetadata.title = `${metadata.title} - skyhan.cloud`;
  else generatedMetadata.title = 'skyhan.cloud';

  if (metadata.description) {
    generatedMetadata.description = metadata.description;
    generatedMetadata.openGraph!.description = metadata.description;
  } else {
    generatedMetadata.description = 'My personal blog and portfolio website where I share my projects and thoughts on various topics.';
    generatedMetadata.openGraph!.description = 'My personal blog and portfolio website where I share my projects and thoughts on various topics.';
  }

  if (metadata.keywords) generatedMetadata.keywords = metadata.keywords;
  else generatedMetadata.keywords = ['personal', 'blog', 'portfolio', 'projects'];

  if (metadata.date) generatedMetadata.date = metadata.date;

  return generatedMetadata;
}