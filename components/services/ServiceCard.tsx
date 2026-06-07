'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  category?: 'linguistique' | 'informatique';
}

export function ServiceCard({ title, description, icon: Icon, features, category }: ServiceCardProps) {
  const gradientClass = category === 'linguistique' 
    ? 'from-primary-500 to-primary-600' 
    : 'from-secondary-500 to-secondary-600';

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative p-6">
        <div className={cn("w-14 h-14 rounded-xl bg-gradient-to-r", gradientClass, "flex items-center justify-center mb-5 shadow-lg")}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              {feature}
            </li>
          ))}
        </ul>
        <Button href="/contact" variant="outline" size="sm" fullWidth>
          En savoir plus
        </Button>
      </div>
    </motion.div>
  );
}
