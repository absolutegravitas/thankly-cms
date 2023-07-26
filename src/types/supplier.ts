import type { Media } from './media'

export interface Supplier {
    id: string;
    title: string;
    website: string;
    relationship: 'positive' | 'neutral' | 'negative';
    logo: string | Media;
    updatedAt: string;
    createdAt: string;
    comments: string;
  
  }