import type { ReactNode } from "react";

export function Timeline({ children }: { children: ReactNode }) {
  return <ol className="space-y-8">{children}</ol>;
}

export function TimelineItem({
  title,
  subtitle,
  meta,
  children,
}: {
  title: string;
  subtitle: string;
  meta: string;
  children?: ReactNode;
}) {
  return (
    <li className="relative border-l border-surface-border pl-6">
      <span className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-accent" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm text-muted">{meta}</span>
      </div>
      <p className="text-sm text-muted">{subtitle}</p>
      {children}
    </li>
  );
}
