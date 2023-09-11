import type { ReactNode } from "react";

export const TagColors = {
  SLATE: 'SLATE',
  GRAY: 'GRAY',
  ZINC: 'ZINC',
  NEUTRAL: 'NEUTRAL',
  STONE: 'STONE',
  RED: 'RED',
  ORANGE: 'ORANGE',
  AMBER: 'AMBER',
  YELLOW: 'YELLOW',
  LIME: 'LIME',
  GREEN: 'GREEN',
  EMERALD: 'EMERALD',
  TEAL: 'TEAL',
  CYAN: 'CYAN',
  SKY: 'SKY',
  BLUE: 'BLUE',
  INDIGO: 'INDIGO',
  VIOLET: 'VIOLET',
  PURPLE: 'PURPLE',
  FUCHSIA: 'FUCHSIA',
  PINK: 'PINK',
  ROSE: 'ROSE',
  GRAINBROWN: 'GRAINBROWN',
  JUMBO: 'JUMBO',
  ASTRONAUT: 'ASTRONAUT',
  ELEPHANT: 'ELEPHANT',
  OUTERSPACE: 'OUTERSPACE',
  CHATEAUGREEN: 'CHATEAUGREEN',
  MARIGOLD: 'MARIGOLD',
  POMEGRANATE: 'POMEGRANATE',
  PRIMARY: 'PRIMARY',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  DANGER: 'DANGER',
} as const;

type Values<T> = T[keyof T]

export interface TagProps{
  color: Values<typeof TagColors>;
  children: ReactNode;
}