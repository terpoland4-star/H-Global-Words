import { cn } from '@/lib/utils';

interface GradientBorderProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  gradient?: string;
}

export function GradientBorder({ children, className, borderRadius = '1rem', gradient = 'from-primary-500 to-secondary-500' }: GradientBorderProps) {
  return (
    <div
      className={cn(`relative group`, className)}
      style={{ borderRadius }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-[calc(${borderRadius}+2px)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
      />
      <div className="relative z-10 bg-white dark:bg-gray-900 rounded-xl">
        {children}
      </div>
    </div>
  );
}
