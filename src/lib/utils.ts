import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Definir el tipo ClassValue localmente
type ClassValue = string | number | boolean | undefined | null | ClassArray | ClassDictionary;
type ClassArray = ClassValue[];
type ClassDictionary = Record<string, any>;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}