export interface CourseModule {
  id: string;
  title: string;
  shortDesc: string;
  duration: string;
  iconName: string;
  topics: string[];
  tools: string[];
  practicalDeliverable: string;
}

export interface EnquiryData {
  id: string;
  name: string;
  phone: string;
  email: string;
  mode: 'Offline New Delhi' | 'Live Online' | 'Hybrid';
  course: string;
  message?: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  batch: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface AIWorkflowStep {
  id: string;
  stepName: string;
  tagline: string;
  aiTools: string[];
  tradMethod: string;
  aiMethod: string;
  speedMultiplier: string;
  promptExample: string;
}
