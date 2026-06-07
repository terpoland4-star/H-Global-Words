'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Laptop, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ParticleBackground />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-950/50 text-primary-600 text-sm font-medium mb-6"
            >
              <Globe size={14} />
              <Laptop size={14} />
              <span>Agence linguistique & digitale</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight">
              <span className="gradient-text">Services linguistiques</span>
              <br />
              <span className="text-gray-800 dark:text-white">et </span>
              <span className="gradient-text">solutions digitales</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              Traduction, interprétation, annotation IA, vente d'ordinateurs et création de sites web.
              <span className="block mt-2 italic font-semibold">"Connecting voices across cultures"</span>
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button href="/contact" size="lg" variant="primary">
                Démarrer mon projet
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/services" size="lg" variant="outline">
                Explorer nos services
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              {[
                { value: '15+', label: 'Langues' },
                { value: '50+', label: 'Projets' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-primary-600">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-6 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="w-8 h-8 text-primary-500" />
                  <div className="h-8 flex-1 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg animate-pulse" />
                </div>
                <div className="flex items-center gap-3">
                  <Laptop className="w-8 h-8 text-secondary-500" />
                  <div className="h-8 flex-1 bg-gradient-to-r from-secondary-100 to-primary-100 rounded-lg animate-pulse" />
                </div>
                <div className="h-32 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg animate-pulse" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
