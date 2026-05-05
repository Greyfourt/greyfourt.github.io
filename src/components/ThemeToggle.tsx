'use client';

import { useEffect, useState } from 'react';
import Icon from './Icons';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
      // Re-apply the attribute in case a client-side navigation (e.g. locale switch)
      // re-rendered <html> and dropped the imperatively-set data-theme.
      if (document.documentElement.getAttribute('data-theme') !== stored) {
        document.documentElement.setAttribute('data-theme', stored);
      }
    } else {
      // No stored preference — CSS @media handles it, just sync the toggle display
      const preferLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      setTheme(preferLight ? 'light' : 'dark');
    }
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <button onClick={toggle} className="themeToggle" aria-label="Toggle theme">
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  );
}
