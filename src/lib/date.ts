export function formatMonthYear(value: string): string {
  const [year, month] = value.split("-").map(Number);
  if (!month) return value;
  return new Date(year, month - 1).toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
  });
}

export function formatDateRange(start: string, end: string): string {
  if (end === "Present") return `${formatMonthYear(start)} — Present`;
  return `${formatMonthYear(start)} — ${formatMonthYear(end)}`;
}

export function formatFullDate(value: string): string {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
