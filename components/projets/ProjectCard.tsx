'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  index: number;
}

export function ProjectCard({ id, title, category, description, image, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200" />
      </div>
      <div className="relative z-20 p-6">
        <span className="text-sm font-semibold text-primary-600">{category}</span>
        <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <Link
          href={`/realisations/${id}`}
          className="inline-flex items-center gap-2 text-primary-600 font-medium hover:gap-3 transition-all"
        >
          Voir le projet <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
