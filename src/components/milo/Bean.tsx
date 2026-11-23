export function Bean({ className = "", rotate = 0 }: { className?: string; rotate?: number }) {
  return (
    <svg viewBox="0 0 40 52" aria-hidden className={`bean pointer-events-none absolute drop-shadow-md ${className}`} style={{ ["--r" as string]: `${rotate}deg` }}>
      <ellipse cx="20" cy="26" rx="17" ry="23" className="fill-chocolate" />
      <ellipse cx="17" cy="20" rx="8" ry="11" className="fill-caramel opacity-40" />
      <path d="M20 5 C 12 18, 28 32, 20 47" className="stroke-espresso" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
