import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function apexchartsDataFormConverter(data: any[] = [], xAxis: string) {
  if (!Array.isArray(data) || data.length === 0) {
    return {
      xLabels: [] as string[],
      series: [] as { name: string; data: any[] }[],
    }
  }

  const keys = Object.keys(data[0] ?? {}).filter((a) => a !== xAxis)
  const xLabels = data.map((a) => a[xAxis]?.slice(0, 40))
  const series = [] as { name: string; data: any[] }[]

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    series.push({
      name: key,
      data: [...data.map((a) => a[key])],
    })
  }

  return {
    xLabels,
    series,
  }
}
