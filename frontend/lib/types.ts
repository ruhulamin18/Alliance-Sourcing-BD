export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface Product {
  title: string;
  description: string;
  image: string;
}