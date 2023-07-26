import { Media } from "./media";

export interface ProductBrand {
    id: string;
  
    comments: string;
    logo: string | Media;
    title: string;
    website: string;
    
    updatedAt: string;
    createdAt: string;
  }