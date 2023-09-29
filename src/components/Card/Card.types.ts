export interface I_Card {
  link: string;
  title: string;
  description: string;

  image?: {
    src?: string;
    alt?: string;
  };

  publishDate?: Date;
}