import { zodResolver } from "@hookform/resolvers/zod";
import { clsx, type ClassValue } from "clsx";
import { useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import type z from "zod";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUserInitials = (username: string) =>
  username
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

export const makeForm = <T extends z.ZodTypeAny>(
  schema: T,
  defaultValues: z.infer<T>
) =>
  useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });


export const getMonthName = (monthNumber: number): string => {
  const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return MONTHS[monthNumber - 1] || "";
};

export const getWeekdayName = (year: number, month: number, day: number): string => {
  const WEEKDAYS = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
  ];

  const date = new Date(year, month - 1, day);

  return WEEKDAYS[date.getDay()];
};

export const randomItem = <T>(items: T[]): T => {
  return items[Math.floor(Math.random() * items.length)];
};