import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greyfourt.github.io';

const projectsWithCaseStudy = ['floof', 'knotbook'];

export default function sitemap(): MetadataRoute.Sitemap {
  const allRoutes: MetadataRoute.Sitemap = [];

  routing.locales.forEach(lang => {
    const langPrefix = lang === 'en' ? '' : `/${lang}`;

    // Home page
    allRoutes.push({
      url: `${baseUrl}${langPrefix}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    });

    // Projects listing page
    allRoutes.push({
      url: `${baseUrl}${langPrefix}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Individual project pages
    projectsWithCaseStudy.forEach(slug => {
      allRoutes.push({
        url: `${baseUrl}${langPrefix}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  return allRoutes;
}
