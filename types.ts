
export interface Unit {
  id: string;
  name: string;
  category: 'Construction' | 'Event' | 'Luxury';
  description: string;
  features: string[];
  imageUrl: string;
  badge?: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  location: string;
  unitCount: number;
  message?: string;
}

export type FormStep = 1 | 2 | 3;
