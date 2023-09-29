import type { ReactNode } from "react";

export interface I_Content {
  image?: {
    src: string;
    alt?: string;
  }
  children: ReactNode;
}