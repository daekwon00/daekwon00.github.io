'use client';

import { useState, useEffect } from 'react';

const sectionIds = ['about', 'journey', 'projects', 'skills', 'contact'];

export function useActiveSection() {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY + 120;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveId(id);
            return;
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeId;
}
