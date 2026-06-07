import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="container-custom text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} HAM GLOBAL WORDS. Tous droits réservés.</p>
        <p className="text-xs text-gray-400 mt-2">Connecting voices across cultures</p>
      </div>
    </footer>
  );
}
