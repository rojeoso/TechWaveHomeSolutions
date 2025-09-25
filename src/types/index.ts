/**
 * TypeScript type definitions for TechWave Home Solutions
 */

// Navigation item interface
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Service item interface
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Contact form data interface
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Company information interface
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
}

// Header component props
export interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}