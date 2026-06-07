interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  badge?: string;
}

export function SectionTitle({ title, subtitle, centered = true, badge }: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {badge && (
        <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
