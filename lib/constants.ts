import { Languages, Mic2, FileText, Handshake, Laptop, Globe, Wrench, GraduationCap, LucideIcon } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  category: 'linguistique' | 'informatique';
}

export const services: Service[] = [
  { id: 1, title: 'Traduction & Interprétation', description: '15+ langues, institutions internationales', icon: Languages, category: 'linguistique', features: ['15+ langues', 'Interprétation simultanée', 'Traduction certifiée'] },
  { id: 2, title: 'Annotation IA', description: 'Données linguistiques pour IA', icon: Mic2, category: 'linguistique', features: ['Textes & audio', 'Langues rares', 'Confidentialité'] },
  { id: 3, title: 'Transcription', description: 'Transcription audio/vidéo', icon: FileText, category: 'linguistique', features: ['Précision', 'Sous-titrage', 'Délais rapides'] },
  { id: 4, title: 'Médiation culturelle', description: 'Ponts entre cultures', icon: Handshake, category: 'linguistique', features: ['Consultant', 'Projets éducatifs', 'Dictionnaires'] },
  { id: 5, title: 'Matériel informatique', description: 'Ordinateurs & accessoires', icon: Laptop, category: 'informatique', features: ['Neufs & reconditionnés', 'Garantie', 'Livraison'] },
  { id: 6, title: 'Création de sites web', description: 'Sites modernes & SEO', icon: Globe, category: 'informatique', features: ['Sites vitrine', 'E-commerce', 'Formation'] },
  { id: 7, title: 'Maintenance', description: 'Support technique', icon: Wrench, category: 'informatique', features: ['Dépannage', 'Préventif', 'À distance'] },
  { id: 8, title: 'Formation', description: 'Bureautique & outils', icon: GraduationCap, category: 'informatique', features: ['Word/Excel', 'Internet', 'Entreprise'] },
];

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  { id: 1, title: 'Projet Takuba', category: 'linguistique', description: 'Interprétation pour forces spéciales', image: '/images/takuba.jpg' },
  { id: 2, title: 'Dictionnaire Tadaksahak', category: 'linguistique', description: 'Création d\'un dictionnaire complet', image: '/images/dictionary.jpg' },
  { id: 3, title: 'Annotation IA', category: 'linguistique', description: 'Données pour modèles IA', image: '/images/ai.jpg' },
  { id: 4, title: 'Site E-commerce', category: 'informatique', description: 'Plateforme e-commerce', image: '/images/ecommerce.jpg' },
  { id: 5, title: 'Fourniture ONG', category: 'informatique', description: '50 ordinateurs pour formation', image: '/images/supply.jpg' },
  { id: 6, title: 'Formation Mairie', category: 'informatique', description: 'Formation bureautique', image: '/images/training.jpg' },
];
