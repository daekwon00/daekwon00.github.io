'use client';

import { useState, useCallback } from 'react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const navItems = [
  { id: 'about', label: '소개' },
  { id: 'journey', label: '여정' },
  { id: 'projects', label: '프로젝트' },
  { id: 'skills', label: '기술' },
  { id: 'contact', label: '연락처' },
];

export default function Navbar() {
  const scrolled = useNavbarScroll();
  const activeId = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setMenuOpen(false);
      document.body.style.overflow = '';
    },
    []
  );

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'navbar-scrolled' : ''
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold gradient-text tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          DK
        </a>


        <div className="flex items-center gap-4">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`nav-link text-sm font-medium transition-colors ${activeId === item.id
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block w-px h-4 bg-zinc-200 dark:bg-zinc-800" />

          <ThemeToggle />

          {/* Hamburger (Mobile) */}
          <button
            className={`hamburger md:hidden flex flex-col justify-center cursor-pointer ${menuOpen ? 'active' : ''
              }`}
            onClick={toggleMenu}
            aria-label="메뉴 열기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu fixed top-0 right-0 w-64 h-full shadow-xl z-40 flex flex-col pt-20 px-8 gap-6 md:hidden transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className="text-lg font-medium text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
