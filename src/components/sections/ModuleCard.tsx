import type { Module } from "@/types/content";

export function ModuleCard({ module }: { module: Module }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-surface-border bg-surface p-4 text-center">
      <div className="flex min-h-24 flex-col items-center justify-center gap-2">
        <p className="line-clamp-2 text-sm font-medium">{module.name}</p>
        <p className="text-2xl font-bold text-accent">
          {module.mark === null ? "Pass" : `${module.mark}%`}
        </p>
      </div>
      {module.components && module.components.length > 0 && (
        <ul className="space-y-1 border-t border-surface-border pt-3 text-xs text-muted">
          {module.components.map((component) => (
            <li key={component.label} className="flex justify-between gap-2">
              <span>
                {component.label} ({component.weight}%)
              </span>
              <span className="font-medium text-foreground">{component.mark}%</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
