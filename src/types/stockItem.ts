import { ProductBrand } from "./productBrand";
import { Category } from "./category";
import { Media } from "./media";
import { Supplier } from "./supplier";

export interface StockItem {
    id: string;
    title: string;

    brand?: string | ProductBrand;
    categories?: string[] | Category[];
    comments: string;
    description: string;
    image: string | Media;
    retailUnitCost: number;
    sku?: string;
    supplier?: string | Supplier;
    totalQty: number;
    type: 'card' | 'gift' | 'box' | 'ribbon';
    value: 'high' | 'medium' | 'low' | 'discontinued';
    wholesaleUnitCost: number;

    updatedAt: string;
    createdAt: string;
  }