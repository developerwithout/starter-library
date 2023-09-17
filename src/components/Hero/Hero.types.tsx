import type { ReactNode } from "react";

export interface I_Hero {
  title: ReactNode;
  description:ReactNode;
  socialButtons?: ReactNode;
  avatar?: ReactNode;
}