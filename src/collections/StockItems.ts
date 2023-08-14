import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const StockItems: CollectionConfig = {
  slug: 'stockItems',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'value', 'totalQty', 'sku'],
    group: 'Shop',
  },
  access: {
    read: () => true,
    create: isAdmin,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'sku', label: 'SKU', type: 'text', required: false },

    { name: 'title', type: 'text', required: false },
    { name: 'description', type: 'textarea', required: false },
    { name: 'discontinued', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
    {
      name: 'brand',
      type: 'relationship',
      relationTo: 'brands',
      hasMany: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'supplier',
      type: 'relationship',
      relationTo: 'suppliers',
      hasMany: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'type',
      type: 'select',
      hasMany: false,
      required: false,
      admin: { isClearable: true },
      options: [
        { label: 'Card', value: 'card' },
        { label: 'Gift', value: 'gift' },
        { label: 'Box', value: 'box' },
        { label: 'Ribbon', value: 'ribbon' },
      ],
    },

    { name: 'totalQty', type: 'number', required: false, min: 1, defaultValue: 1 },
    { name: 'retailUnitCost', type: 'number', min: 0, required: false, defaultValue: 0 },
    { name: 'wholesaleUnitCost', type: 'number', min: 0, required: false, defaultValue: 0 },
    { name: 'comments', type: 'textarea', required: false, admin: { position: 'sidebar' } },

    { name: 'image', type: 'upload', relationTo: 'media', required: false },
  ],
}

export default StockItems
