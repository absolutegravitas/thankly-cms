import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Brands: CollectionConfig = {
  slug: 'brands',
  admin: {
    useAsTitle: 'title',
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
    { name: 'logo', type: 'upload', relationTo: 'media', required: false },
    { name: 'title', type: 'text', required: true },
    { name: 'website', type: 'text', required: false },
    { name: 'description', type: 'textarea', required: false },
    { name: 'comments', type: 'textarea', required: false, admin: { position: 'sidebar' } },
  ],
}

export default Brands
