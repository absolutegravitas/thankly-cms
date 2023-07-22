import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Discounts: CollectionConfig = {
  slug: 'discounts',
  admin: {
    useAsTitle: 'code',
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
    { name: 'code', type: 'text', required: true, admin: { width: '50%', }, },
    { name: 'description', type: 'textarea', required: true, admin: { width: '50%', }, },
    { name: 'activeDate', type: 'date', required: true, admin: { width: '50%', }, },
    { name: 'expiryDate', type: 'date', required: true, admin: { width: '50%', }, },
    { name: 'value', type: 'number', required: true, admin: { width: '50%', }, },
    {
      name: 'type',
      type: 'select',
      hasMany: false, required: true, admin: { width: '50%', isClearable: true, },
      options: [
        { label: 'Percent Off', value: 'percent', },
        { label: 'Amount Off', value: 'amount', },
      ],
    },
  ],
}

export default Discounts
