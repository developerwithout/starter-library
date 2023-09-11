import type { ReactNode } from "react";

export interface PostContentProps {
  image?: {
    src: string;
    alt?: string;
  }
  children: ReactNode;
}