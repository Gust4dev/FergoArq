export interface Project {
  id: number;
  title: string;
  category: string;
  imageLabel: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}