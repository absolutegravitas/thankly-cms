import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Suppliers: CollectionConfig = {
  slug: 'suppliers',
  admin: { useAsTitle: 'title', group: 'Shop' },
  access: {
    read: () => true,
    create: isAdmin,
    readVersions: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    { name: 'logo', type: 'upload', relationTo: 'media', required: true },
    { name: 'title', type: 'text', required: true, admin: { width: '50%' } },
    { name: 'website', type: 'text', required: true, admin: { width: '50%' } },
    { name: 'description', type: 'textarea', required: false },
    { name: 'comments', type: 'textarea', required: false },
  ],
}

export default Suppliers
