import { ReactNode } from "react";

export interface ProjectProps {
  title: string;
  link: string;
  description?: string;
  categories?: ReactNode;
  image?: {
    src: string;
    alt: string;
  };
}