import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const StockItems: CollectionConfig = {
  slug: 'stockItems',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'value', 'totalQty', 'sku'],
    group: 'Shop'
  },
  access: {
    read: () => true,
    create: isAdmin,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      type: 'row', // can't use row for anything that needss to be shown on admin list view
      fields: [
        { name: 'title', type: 'text', required: false, admin: { width: '50%', }, },
        {
          name: 'type',
          type: 'select',
          hasMany: false, required: false, admin: { width: '50%', isClearable: true, },
          options: [
            { label: 'Card', value: 'card', },
            { label: 'Gift', value: 'gift', },
            { label: 'Box', value: 'box', },
            { label: 'Ribbon', value: 'ribbon', },
          ],
        },
        { name: 'description', type: 'textarea', required: false, admin: { width: '50%', }, },
        {
          name: 'value',
          type: 'select',
          defaultValue: 'medium',
          hasMany: false, required: false, admin: { width: '50%', isClearable: true, },
          options: [
            { label: 'High', value: 'high', },
            { label: 'Medium', value: 'medium', },
            { label: 'Low', value: 'low', },
            { label: 'Discontinued', value: 'discontinued', },
          ],
        },
        { name: 'brand', type: 'relationship', relationTo: 'brands', hasMany: false, admin: { width: '50%', }, },
        { name: 'supplier', type: 'relationship', relationTo: 'suppliers', hasMany: false, admin: { width: '50%', }, },
        { name: 'sku', label: 'SKU', type: 'text', required: false, admin: { width: '50%', }, },
        { name: 'totalQty', type: 'number', required: false, min: 1, defaultValue: 1, },
        { name: 'retailUnitCost', type: 'number', min: 0, required: false, defaultValue: 0, },
        { name: 'wholesaleUnitCost', type: 'number', min: 0, required: false, defaultValue: 0, },
        { name: 'comments', type: 'textarea', required: false, },
      ]
    },
    { name: 'discontinued', type: 'checkbox', defaultValue: false },
    { name: 'image', type: 'upload', relationTo: 'media', required: false, },
  ],
}

export default StockItems
