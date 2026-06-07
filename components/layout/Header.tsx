'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Réalisations', href: '/realisations' },
  { name: 'À propos', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 w-full z-50 transition-all duration-500',
          isScrolled
            ? 'glass shadow-lg py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center gap-1">
                <Globe className="w-6 h-6 text-primary-500 group-hover:rotate-12 transition-transform duration-300" />
                <Laptop className="w-6 h-6 text-secondary-500 group-hover:-rotate-12 transition-transform duration-300" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold gradient-text">HAM GLOBAL WORDS</span>
                <p className="text-xs text-gray-500 dark:text-gray-400">Connecting voices across cultures</p>
              </div>
              <span className="sm:hidden text-xl font-bold gradient-text">HGW</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium transition-colors hover:text-primary-500',
                    pathname === item.href
                      ? 'text-primary-500'
                      : 'text-gray-600 dark:text-gray-300'
                  )}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="active-nav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Button href="/contact" variant="primary" size="sm" className="hidden md:inline-flex">
                Devis gratuit
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navigation={navigation} />
    </>
  );
}
