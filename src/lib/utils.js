import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// * THIS IS CLASS NAME "CN" FUNCTION WILL USE TAILWIND MERGE TO ALLOW EASILY COMBINE CLASS NAME WITHOUT REALLY WRITING A LOT OF LINES OF CLASS NAME IN ONE SINGLE LINE
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
