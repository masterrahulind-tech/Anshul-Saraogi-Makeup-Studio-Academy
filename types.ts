
export interface Address {
  line1: string;
  line2: string;
  city: string;
  pincode: string;
  state: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  rating: number;
  reviewCount: number;
  phone: string;
  whatsapp: string;
  email: string;
  address: Address;
  hours: {
    weekdays: string;
    sunday: string;
    currentStatus: string;
  };
  mapUrl: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  occasion: string;
  date: string;
}

export interface WhyChooseItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Course {
  id: number;
  title: string;
  duration: string;
  level: string;
  topics: string[];
  certification: boolean;
}

export interface Package {
  id: number;
  name: string;
  price: string;
  features: string[];
  popular: boolean;
}
