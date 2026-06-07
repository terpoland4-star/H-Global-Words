'use client';

import { useCounter } from '@/hooks/useCounter';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const stats = [
  { value: 15, suffix: '+', label: 'Langues maîtrisées', icon: '🌍' },
  { value: 50, suffix: '+', label: 'Projets réalisés', icon: '📁' },
  { value: 98, suffix: '%', label: 'Clients satisfaits', icon: '⭐' },
  { value: 24, suffix: '/7', label: 'Support client', icon: '🕒' },
];

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
      <div className="container-custom">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = useCounter(stat.value, inView);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold">
                  {count}
                  {stat.suffix}
                </div>
                <div className="text-sm md:text-base opacity-90 mt-2">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
