'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'Jean Kouadio',
    role: 'Coordinateur, ONG Internationale',
    text: 'Une équipe d\'interprètes exceptionnelle. Leur maîtrise des langues africaines rares a été cruciale pour nos missions humanitaires au Sahel.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Koné',
    role: 'Fondatrice, Startup Tech',
    text: 'Ils nous ont fourni des ordinateurs de qualité et ont créé notre site web. Un partenaire fiable et professionnel à recommander.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Dr. Mohamed Touré',
    role: 'Chef de projet IA',
    text: 'L\'expertise en annotation linguistique de HAM GLOBAL WORDS est incomparable. Des données de haute qualité pour nos modèles IA.',
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <SectionTitle
          title="Ils nous font confiance"
          subtitle="Découvrez les retours de nos clients"
          badge="Témoignages"
        />

        <div className="relative max-w-4xl mx-auto mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
            >
              <Quote className="w-12 h-12 text-primary-300 opacity-50 mb-6" />
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                "{testimonials[current].text}"
              </p>
              <div className="flex items-center justify-between mt-8">
                <div>
                  <p className="font-bold text-lg">{testimonials[current].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[current].role}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary-500 text-secondary-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all ${
                current === index ? 'w-8 bg-primary-500' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
