import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Discounts: CollectionConfig = {
  slug: 'discounts',
  admin: {
    useAsTitle: 'code',
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
    { name: 'code', type: 'text', required: false },
    { name: 'description', type: 'textarea', required: false },
    {
      name: 'type',
      type: 'select',
      hasMany: false,
      required: false,
      admin: { isClearable: true },
      options: [
        { label: 'Percent Off', value: 'percent' },
        { label: 'Amount Off', value: 'amount' },
      ],
    },
    { name: 'value', type: 'number', required: false },
    {
      name: 'activeDate',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'expiryDate',
      type: 'date',
      required: false,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
  ],
}

export default Discounts
