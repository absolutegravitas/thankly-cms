import type { CollectionConfig } from 'payload/types'
import { isAdmin } from '../access/isAdmin'

const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'provider',
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
    { name: 'providerName', label:'Provider Name', type: 'text', required: false, admin: { width: '50%', }, },
    { name: 'providerOrg', label:'Provider Org', type: 'text', required: false, admin: { width: '50%', }, },
    { name: 'image', label: "Image", type: 'upload', relationTo: 'media', required: false, },
    { name: 'rating', type: 'number', required: false, min:1, max:5, admin: { width: '50%', }, },
    { name: 'review', type: 'textarea', required: false, admin: { width: '50%', }, },

  ],
}

export default Reviews
