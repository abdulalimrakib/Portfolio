export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded border border-white/10 px-2 py-1 text-[11px] uppercase tracking-wider text-muted">
      {children}
    </span>
  );
}
