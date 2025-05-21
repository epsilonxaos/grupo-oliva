import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases condicionales y resuelve conflictos de Tailwind.
 * @param inputs Clases a combinar.
 * @returns String de clases final.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(...inputs));
}
