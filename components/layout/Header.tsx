'use client';

import Link from 'next/link';
import { Globe, Laptop, Menu } from 'lucide-react';
import { useState } from 'react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-md z-50">
        <div className="container-custom py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Globe className="text-primary-600" size={24} />
            <Laptop className="text-secondary-500" size={24} />
            <span className="font-bold text-xl hidden sm:inline">HAM GLOBAL WORDS</span>
            <span className="font-bold text-xl sm:hidden">HGW</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-primary-600">Accueil</Link>
            <Link href="/services" className="hover:text-primary-600">Services</Link>
            <Link href="/realisations" className="hover:text-primary-600">Réalisations</Link>
            <Link href="/about" className="hover:text-primary-600">À propos</Link>
            <Link href="/blog" className="hover:text-primary-600">Blog</Link>
            <Link href="/contact" className="hover:text-primary-600">Contact</Link>
          </nav>

          <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
