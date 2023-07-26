export interface Announcement {
    id: string;
    name?: string;
    content: {
      [k: string]: unknown;
    }[];
    updatedAt: string;
    createdAt: string;
  }