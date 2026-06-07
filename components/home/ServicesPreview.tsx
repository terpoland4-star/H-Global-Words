'use client';

import { motion } from 'framer-motion';
import { ServiceCard } from '@/components/services/ServiceCard';
import { services } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

export function ServicesPreview() {
  const previewServices = services.slice(0, 4);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <SectionTitle
          title="Nos services"
          subtitle="Des solutions sur mesure pour vos besoins linguistiques et digitaux"
          badge="Expertise"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {previewServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button href="/services" variant="outline" size="lg">
            Tous nos services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Import manquant
import { ArrowRight } from 'lucide-react';
