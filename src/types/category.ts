export interface Category {
    id: string;
    title?: string;
    parent?: string | Category;
    breadcrumbs?: {
      doc?: string | Category;
      url?: string;
      label?: string;
      id?: string;
    }[];
    updatedAt: string;
    createdAt: string;
  }