interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-pink-700">
      {children}
    </span>
  );
}