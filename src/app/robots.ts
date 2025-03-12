import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greyfourt.github.io';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Add any paths you want to exclude from crawling
      // disallow: ['/admin/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
