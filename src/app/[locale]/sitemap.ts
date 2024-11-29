import { routing } from '@/i18n/routing';
import type { MetadataRoute } from 'next'

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
  
    // return [{ locale: 'en' }, { locale: 'fr' }];
  }

  
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://greyfourt.github.io',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://greyfourt.github.io/projects',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://greyfourt.github.io/projects/floof',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: 'https://greyfourt.github.io/projects/knotbook',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}
