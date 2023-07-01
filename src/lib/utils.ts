import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function apexchartsDataFormConverter(data, xAxis){
    const keys = Object.keys(data[0])?.filter((a) => a !== xAxis) || [];
    const xLabels = data.map((a) => a[xAxis]?.slice(0, 40));
    const series = [];
    for (var i = 0; i < keys.length; i++) {
      const key = keys[i];
      series.push({
        name: key,
        data: [...data?.map((a) => a[key])],
      });
    }
  
    return {
      xLabels,
      series,
    };
  };