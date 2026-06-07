'use client';

import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex justify-end p-4">
        <button onClick={onClose} className="p-2">
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center gap-6 mt-12">
        <Link href="/" onClick={onClose} className="text-xl">Accueil</Link>
        <Link href="/services" onClick={onClose} className="text-xl">Services</Link>
        <Link href="/realisations" onClick={onClose} className="text-xl">Réalisations</Link>
        <Link href="/about" onClick={onClose} className="text-xl">À propos</Link>
        <Link href="/blog" onClick={onClose} className="text-xl">Blog</Link>
        <Link href="/contact" onClick={onClose} className="text-xl">Contact</Link>
      </nav>
    </div>
  );
}
