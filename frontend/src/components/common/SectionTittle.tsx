interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-2xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-pink-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}