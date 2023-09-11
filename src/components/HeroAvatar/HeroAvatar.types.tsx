import type { ReactNode } from "react";

export interface HeroAvatarProps {
  title: ReactNode;
  description:ReactNode;
  socialButtons?: ReactNode;
  avatar?: ReactNode;
}