export interface Media {
    alt: string;
    createdAt: string;
    darkModeFallback?: string | Media;
    filename?: string;
    filesize?: number;
    height?: number;
    id: string;
    mimeType?: string;
    updatedAt: string;
    url?: string;
    width?: number;
  }