import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

// Define types for our data structures
type Project = {
  slug: string;
  updatedAt?: string;
};

type Language = 'en' | 'fr'; // Add more languages as needed

// Get available languages from the file system
async function getLanguages(): Promise<Language[]> {
  // Default to English plus any locale folders
  const defaultLanguages: Language[] = ['en'];
  
  try {
    // Check for locale folders in your app directory
    const localeDir = path.join(process.cwd(), 'src/app/[locale]');
    if (fs.existsSync(localeDir)) {
      const dirs = fs.readdirSync(localeDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      // Filter to ensure only valid language codes are included
      const validLanguages = dirs.filter(dir => /^[a-z]{2}(-[A-Z]{2})?$/.test(dir)) as Language[];
      return [...defaultLanguages, ...validLanguages];
    }
  } catch (error) {
    console.error('Error reading language directories:', error);
  }
  
  // Fallback to manually defined languages if filesystem approach fails
  return ['en', 'fr'];
}

// This function would fetch your projects
async function getProjects(): Promise<Project[]> {
  // If your projects are in files, you could read the directory
  try {
    const projectsDir = path.join(process.cwd(), 'src/app/projects');
    
    if (fs.existsSync(projectsDir)) {
      const files = fs.readdirSync(projectsDir);
      
      // Filter for project files/folders
      // This assumes each project has its own file or directory
      return files
        .filter(file => !file.startsWith('.') && !file.includes('.')) // Filter out hidden files and non-directories
        .map(slug => {
          // Try to get the last modified date of the project file/folder
          const stats = fs.statSync(path.join(projectsDir, slug));
          return {
            slug,
            updatedAt: stats.mtime.toISOString(),
          };
        });
    }
  } catch (error) {
    console.error('Error reading project directories:', error);
  }
  
  // Fallback to static list if file system approach fails
  return [
    { slug: 'floof', updatedAt: '2025-02-15' },
    { slug: 'knotbook', updatedAt: '2025-02-15' },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define your base URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greyfourt.github.io';
  
  // Get languages and projects
  const languages = await getLanguages();
  const projects = await getProjects();
  
  // Create array to hold all routes
  const allRoutes: MetadataRoute.Sitemap = [];
  
  // Add home routes for each language
  languages.forEach(lang => {
    // For default language (en), don't include language prefix
    const langPrefix = lang === 'en' ? '' : `/${lang}`;
    
    // Add home page
    allRoutes.push({
      url: `${baseUrl}${langPrefix}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    });
    
    // Add projects landing page
    allRoutes.push({
      url: `${baseUrl}${langPrefix}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
    
    // Add individual project pages
    projects.forEach(project => {
      allRoutes.push({
        url: `${baseUrl}${langPrefix}/projects/${project.slug}`,
        lastModified: project.updatedAt ? new Date(project.updatedAt) : new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });
  
  return allRoutes;
}
