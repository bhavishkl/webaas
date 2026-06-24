export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}
