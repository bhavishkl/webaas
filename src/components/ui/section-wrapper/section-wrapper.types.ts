export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "surface" | "primary" | "none";
  padding?: "sm" | "md" | "lg";
}
