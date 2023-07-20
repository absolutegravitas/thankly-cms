import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const StockItems: CollectionConfig = {
  slug: 'stockItems',
  admin: {
    useAsTitle: 'title',
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
      type: 'row', // required
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'type', // required
          type: 'select', // required
          hasMany: false,
          required: true,
          admin: {
            width: '50%',

            isClearable: true,
            // isSortable: true, // use mouse to drag and drop different values, and sort them according to your choice
          },
          options: [
            {
              label: 'Card',
              value: 'card',
            },
            {
              label: 'Gift',
              value: 'gift',
            },
            {
              label: 'Box',
              value: 'box',
            },
            {
              label: 'Ribbon',
              value: 'ribbon',

            },
          ],
        },
        {
          name: 'categories',
          type: 'relationship',
          relationTo: 'categories',
          hasMany: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'brand',
          type: 'relationship',
          relationTo: 'product-brands',
          hasMany: false,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'supplier',
          type: 'relationship',
          relationTo: 'suppliers',
          hasMany: false,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'sku',
          label: 'SKU',
          type: 'text',
          required: false,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'totalQty',
          type: 'number',
          required: true,
          min: 1,
          defaultValue: 0,
        },
        {
          name: 'unitCost',
          type: 'number',
          min: 0,
          required: true,
          defaultValue: 0,
        },
      ]
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

  ],
}

export default StockItems
