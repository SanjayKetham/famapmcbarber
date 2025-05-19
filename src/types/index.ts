export interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  popular?: boolean;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatarUrl?: string;
}

export interface BusinessHour {
  day: string;
  hours: string;
}