
import { StudioInfo, Service, PortfolioImage, Testimonial, WhyChooseItem, Course, Package } from '../types';

export const studioInfo: StudioInfo = {
  name: "Anshul Saraogi Makeup Studio and Academy",
  tagline: "Luxury Bridal Makeup in Andheri East, Mumbai",
  description: "Transform your special day with soft, classy, and elegant makeup artistry",
  rating: 4.4,
  reviewCount: 168,
  phone: "+91 79775 66520",
  whatsapp: "917977566520",
  email: "contact@anshulsaraogi.com",
  address: {
    line1: "A-606, Kanakia Spaces Dynasty, Dynasty Business Park",
    line2: "Near Chakala Metro Station (J B Nagar)",
    city: "Andheri East, Mumbai",
    pincode: "400059",
    state: "Maharashtra"
  },
  hours: {
    weekdays: "10:30 AM - 8:00 PM",
    sunday: "10:30 AM - 6:00 PM",
    currentStatus: "Closed · Opens 10:30 AM"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8!2d72.8677!3d19.1136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b0e0000001%3A0xe6a80242207b1c1e!2sAnshul%20Saraogi%20Makeup%20Studio%20and%20Academy!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin"
};

export const services: Service[] = [
  {
    id: 1,
    title: "Bridal Makeup",
    description: "Personalized bridal looks with premium products for your dream wedding day",
    icon: "Sparkles",
    features: ["HD Makeup", "Traditional & Modern Styles", "Trial Session Included"]
  },
  {
    id: 2,
    title: "Airbrush Makeup",
    description: "Flawless, long-lasting airbrush makeup perfect for photos and videos",
    icon: "Wand2",
    features: ["Camera Ready", "Waterproof", "Natural Finish"]
  },
  {
    id: 3,
    title: "Party & Occasion Makeup",
    description: "Glamorous makeup for parties, events, and special occasions",
    icon: "PartyPopper",
    features: ["Custom Looks", "Event Makeup", "Quick Service"]
  },
  {
    id: 4,
    title: "Hairstyling & Draping",
    description: "Expert hairstyling and saree draping to complete your perfect look",
    icon: "Brush",
    features: ["Bridal Hairstyles", "Saree Draping", "Hair Accessories"]
  },
  {
    id: 5,
    title: "Pre-Bridal Services",
    description: "Comprehensive skincare and makeup prep for the glowing bride",
    icon: "Heart",
    features: ["Skin Analysis", "Facials", "Beauty Treatments"]
  },
  {
    id: 6,
    title: "Makeup Academy",
    description: "Professional makeup training programs for aspiring makeup artists",
    icon: "GraduationCap",
    features: ["Certified Courses", "Hands-on Training", "Career Support"]
  }
];

export const portfolioImages: PortfolioImage[] = [
  { 
    id: 1, 
    url: "https://images.unsplash.com/photo-1722181366190-82815609eb15?auto=format&fit=crop&q=80&w=800", 
    alt: "Stunning Red Bridal Look", 
    category: "Bridal" 
  },
  { 
    id: 2, 
    url: "https://images.unsplash.com/photo-1722181366197-a033eb62c392?auto=format&fit=crop&q=80&w=800", 
    alt: "Traditional Indian Bride", 
    category: "Bridal" 
  },
  { 
    id: 3, 
    url: "https://images.unsplash.com/photo-1636023730877-233b9237d4ec?auto=format&fit=crop&q=80&w=800", 
    alt: "Artistry in Progress", 
    category: "Behind the Scenes" 
  },
  { 
    id: 4, 
    url: "https://images.unsplash.com/photo-1578503803703-e818b8a0e00b?auto=format&fit=crop&q=80&w=800", 
    alt: "Bridal Jewelry & Setup", 
    category: "Behind the Scenes" 
  },
  { 
    id: 5, 
    url: "https://images.pexels.com/photos/5732998/pexels-photo-5732998.jpeg?auto=compress&cs=tinysrgb&w=800", 
    alt: "Glamorous Party Look", 
    category: "Party Makeup" 
  },
  { 
    id: 6, 
    url: "https://images.pexels.com/photos/5065854/pexels-photo-5065854.jpeg?auto=compress&cs=tinysrgb&w=800", 
    alt: "Modern Bridal Transformation", 
    category: "Bridal" 
  }
];

export const testimonials: Testimonial[] = [
  { id: 1, name: "Priya Sharma", rating: 5, text: "Anshul did my bridal makeup and I couldn't be happier! The soft, classy vibe was exactly what I wanted. She understood my vision perfectly.", occasion: "Bridal Makeup", date: "2024-01" },
  { id: 2, name: "Neha Patel", rating: 5, text: "Amazing experience at the studio! The ambience is so relaxing and luxurious. Anshul is not just talented but also very friendly.", occasion: "Party Makeup", date: "2024-02" },
  { id: 3, name: "Ritika Malhotra", rating: 5, text: "I enrolled in the makeup academy course and it was the best decision. The training is comprehensive and hands-on.", occasion: "Makeup Course", date: "2024-01" },
];

export const whyChooseUs: WhyChooseItem[] = [
  { id: 1, icon: "Star", title: "4.4★ Google Rating", description: "168+ happy clients trust us with their special moments" },
  { id: 2, icon: "Palette", title: "Soft & Classy Style", description: "Elegant makeup that enhances your natural beauty" },
  { id: 3, icon: "Users", title: "Friendly Artists", description: "Professional yet warm team that makes you comfortable" },
  { id: 4, icon: "Sparkles", title: "Luxury Ambience", description: "Modern studio with premium setup near Chakala Metro" },
  { id: 5, icon: "Shield", title: "Hygienic Practices", description: "Sanitized tools and premium international products" },
  { id: 6, icon: "Award", title: "Personalized Experience", description: "Customized looks tailored to your style and preferences" }
];

export const academyCourses: Course[] = [
  { id: 1, title: "Professional Makeup Artistry", duration: "3 Months", level: "Beginner to Advanced", topics: ["Bridal Makeup", "Party Looks", "HD & Airbrush", "Color Theory"], certification: true },
  { id: 2, title: "Bridal Makeup Specialist", duration: "6 Weeks", level: "Intermediate", topics: ["Traditional Bridal", "Modern Bridal", "Hairstyling", "Draping"], certification: true },
  { id: 3, title: "Self Makeup Masterclass", duration: "1 Week", level: "Beginner", topics: ["Daily Makeup", "Party Looks", "Product Selection", "Techniques"], certification: false }
];

export const packages: Package[] = [
  { id: 1, name: "Bridal Package - Classic", price: "₹25,000", features: ["Bridal Makeup with Trial", "Hairstyling", "Saree Draping", "Family Makeup (2 members)"], popular: false },
  { id: 2, name: "Bridal Package - Premium", price: "₹40,000", features: ["HD/Airbrush Bridal Makeup", "Pre-Bridal Session", "Bridal Trial Session", "On-location Service"], popular: true },
  { id: 3, name: "Party Makeup", price: "₹5,000", features: ["Party/Event Makeup", "Hairstyling", "Premium Products", "Photo-ready Finish"], popular: false }
];

export const heroImage = "https://images.unsplash.com/photo-1641699862936-be9f49b1c38d?auto=format&fit=crop&q=80&w=1920";
export const academyImages = [
  "https://images.unsplash.com/photo-1709477542149-f4e0e21d590b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1709477542170-f11ee7d471a0?auto=format&fit=crop&q=80&w=800"
];
export const studioImage = "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&q=80&w=1200";
