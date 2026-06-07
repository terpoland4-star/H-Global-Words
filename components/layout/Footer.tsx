'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Globe, Laptop } from 'lucide-react';

const footerLinks = {
  linguistique: [
    { name: 'Traduction & Interprétation', href: '/services#traduction' },
    { name: 'Annotation IA', href: '/services#annotation' },
    { name: 'Transcription', href: '/services#transcription' },
    { name: 'Médiation culturelle', href: '/services#mediation' },
  ],
  digital: [
    { name: 'Matériel informatique', href: '/services#materiel' },
    { name: 'Création de sites web', href: '/services#web' },
    { name: 'Maintenance', href: '/services#maintenance' },
    { name: 'Formation', href: '/services#formation' },
  ],
  company: [
    { name: 'À propos', href: '/about' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'Politique de confidentialité', href: '/politique-confidentialite' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-secondary-400" />
              <Laptop className="w-8 h-8 text-primary-400" />
            </div>
            <h3 className="text-2xl font-bold gradient-text mb-2">HAM GLOBAL WORDS</h3>
            <p className="text-gray-400 text-sm italic">"Connecting voices across cultures"</p>
            <p className="text-gray-400 text-sm mt-4">Basé au Sahel, actif dans le monde entier.</p>
          </div>

          {/* Services Linguistiques */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Globe size={18} /> Linguistique
            </h4>
            <ul className="space-y-2">
              {footerLinks.linguistique.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Digitales */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Laptop size={18} /> Digital
            </h4>
            <ul className="space-y-2">
              {footerLinks.digital.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens utiles */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liens utiles</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone size={16} />
                <span>+227 89 03 01 06</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail size={16} />
                <a href="mailto:contact@hamglobalwords.com" className="hover:text-white transition-colors">
                  contact@hamglobalwords.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin size={16} />
                <span>Niamey, Niger (Sahel)</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} HAM GLOBAL WORDS. Tous droits réservés.</p>
          <p className="text-xs mt-1">Vos mots, nos ponts.</p>
        </div>
      </Container>
    </footer>
  );
}
