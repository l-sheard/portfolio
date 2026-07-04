export function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-surface-border bg-surface px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
