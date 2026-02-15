'use client';

import { useState, useCallback } from 'react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : ''
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

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`nav-link text-sm transition-colors ${
                activeId === item.id
                  ? 'text-indigo-600'
                  : 'text-zinc-500 hover:text-indigo-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger (Mobile) */}
        <button
          className={`hamburger md:hidden flex flex-col justify-center cursor-pointer ${
            menuOpen ? 'active' : ''
          }`}
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-40 flex flex-col pt-20 px-8 gap-6 md:hidden ${
          menuOpen ? 'open' : ''
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className="text-lg text-zinc-600 hover:text-indigo-600 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
