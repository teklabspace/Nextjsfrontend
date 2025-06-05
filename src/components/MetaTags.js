import Head from 'next/head';
import metaTags from '../../public/metaTags.json';

export default function MetaTags({ page }) {
  const tags = metaTags[page] || {
    title: 'Teklabspace | Innovative Tech Solutions',
    description:
      'Explore Teklabspace, a platform for cutting-edge technology solutions and innovative projects.',
    keywords: 'teklabspace, technology, innovation, nextjs, react',
    ogTitle: 'Teklabspace',
    ogDescription: 'Discover innovative tech solutions at Teklabspace.',
    ogImage: '/images/logo.png',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Teklabspace',
    twitterDescription: 'Discover innovative tech solutions at Teklabspace.',
    twitterImage: '/images/logo.png',
  };

  return (
    <Head>
      <title>{tags.title}</title>
      <meta name='description' content={tags.description} />
      <meta name='keywords' content={tags.keywords} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='index, follow' />
      <meta charSet='utf-8' />
      {/* Open Graph Tags */}
      <meta property='og:title' content={tags.ogTitle} />
      <meta property='og:description' content={tags.ogDescription} />
      <meta property='og:image' content={tags.ogImage} />
      <meta property='og:type' content={tags.ogType} />
      <meta property='og:site_name' content='Teklabspace' />
      {/* Twitter Card Tags */}
      <meta name='twitter:card' content={tags.twitterCard} />
      <meta name='twitter:title' content={tags.twitterTitle} />
      <meta name='twitter:description' content={tags.twitterDescription} />
      <meta name='twitter:image' content={tags.twitterImage} />
    </Head>
  );
}
