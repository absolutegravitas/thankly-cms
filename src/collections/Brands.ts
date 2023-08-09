import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Brands: CollectionConfig = {
  slug: 'brands',
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
      type: 'row',
      fields: [
        { name: 'title', type: 'text', required: true, admin: { width: '50%', }, },
        { name: 'website', type: 'text', required: true, admin: { width: '50%', }, },
      ]
    },
    { name: 'comments', type: 'textarea', required: false, },
    { name: 'logo', type: 'upload', relationTo: 'media', required: true, },

  ],
}

export default Brands